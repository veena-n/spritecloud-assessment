
export const users = {
    logotitle: {
      title: 'Swag Labs'
    },
    standard_user: {
      username: 'standard_user',
      password: 'secret_sauce',
      expectedUrl: '/inventory',
      expectedTitle: 'Products',
      expectedError: null,
      addToCart: true,
      logout: true
    },
    invalid_user: {
      username: 'invalid_user',
      password: 'wrong_password',
      expectedUrl: '',
      expectedTitle: 'Epic sadface: Username and password do not match',
      expectedError: true,
      addToCart: false,
      logout: false
    },
    locked_out_user: {
      username: 'locked_out_user',
      password: 'secret_sauce',
      expectedUrl: '',
      expectedTitle: 'Epic sadface: Sorry, this user has been locked out.',
      expectedError: true,
      addToCart: false,
      logout: false
    },
    password_error:{
      username: 'standard_user',
      expectedUrl: '',
      expectedTitle: 'Epic sadface: Password is required',
      expectedError: true,

    },

    checkout_info:{
      firstname: 'veena',
      lastname: 'N',
      Postalcode: '1187LT'


    }


  }
  