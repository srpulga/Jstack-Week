import {Request, Response} from 'express';
import {Order} from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const product = await Order.findByIdAndUpdate(orderId, { status });

    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
