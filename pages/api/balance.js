export default function handler(req, res) {
  if (req.method === 'POST') {
    const { cliente_id } = req.body;

    if (cliente_id === 'demo001') {
      return res.status(200).json({ balance: '$125.00', cliente_id });
    } else {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

