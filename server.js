require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payment');
const withdrawalRoutes = require('./routes/withdrawal');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/payment', paymentRoutes);
app.use('/api/withdrawal', withdrawalRoutes);

app.get('/', (req, res) => res.json({
    status: '✅ Expense Manager Backend Running',
    version: '2.0.0 - IntaSend Wallet Storage',
    depositRate: `${process.env.DEPOSIT_RATE} KSH = $1`,
    withdrawalRate: `$1 = ${process.env.WITHDRAWAL_RATE} KSH`
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
