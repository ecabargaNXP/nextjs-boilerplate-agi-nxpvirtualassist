export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Recibido desde Bland:', req.body);

    const respuesta = {
      mensaje: 'Your Balance is $123.45',
      saldo: 123.45
    };

    res.status(200).json(respuesta);
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

