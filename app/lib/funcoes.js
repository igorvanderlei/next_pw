'use server'

export async function sayHello() {
    console.log("Hello")
}

export async function listarClientes() {
    const clientesData = await fetch ('http://localhost:8080/cliente', { cache: 'no-store' });
    const clientes = await clientesData.json();
    return clientes;
}

export async function carregarCliente(id) {
  const clienteData = await fetch ('http://localhost:8080/cliente/' + id, { cache: 'no-store' });
  const cliente = await clienteData.json();
  return cliente;
}

export async function cadastrarCliente(formData) {
    try {
      const response = await fetch('http://localhost:8080/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }