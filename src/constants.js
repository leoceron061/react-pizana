export const constants = {
    URLLOCAL: process.env.NODE_ENV == 'production' ? 'https://app.danielpizana.com/api' : 'http://127.0.0.1:5000/api',
    URLSOCKET: process.env.NODE_ENV == 'production' ? 'https://app.danielpizana.com' : 'http://127.0.0.1:5000',
  }

export const category_states = ['Admin', 'Cliente']