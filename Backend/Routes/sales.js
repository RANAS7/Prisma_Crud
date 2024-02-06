const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/add-sales", async (req, res) => {
  try {
    let date;
    let total = req.body.quantity * req.body.price;

    if (req.body.date) {
      // If date is provided in the request, use it
      date = new Date(req.body.date);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
    } else {
      // If date is not provided, use the current date as the default
      date = new Date();
    }
    const salesData = await prisma.sales.create({
      data: {
        date: date.toISOString(),
        company: req.body.company,
        quantity: parseInt(req.body.quantity),
        price: parseFloat(req.body.price),
        product_id: parseInt(req.body.selectedProduct),
        total: total,
        payment_type: req.body.payment_type,
      },
    });
    res.json(salesData);
    console.log(salesData);
  } catch (error) {
    console.error("Error inserting sales with Prisma", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
