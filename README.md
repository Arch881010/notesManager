# Notes

An application to manage your notes!
*This is meant as a 1 key 1 person system! Create your own API key wisely!*

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone this repository.
Rename example.env to .env (and if you plan to contribute, readd example.env)

Edit .env for the required things.
port - The port you want it to run off
authkey - An authkey of your choosing! Run it through base64, whatever you want to introduce some serious strength length!
user - The username for the login panel
pass - The password for the login panel 

(Your user must NOT include a space, or you'll be locked out and uable to be signed in.)
(Your authkey cannot be "null", "", or any nondefined characters.)

```cmd
npm i
node .
```

## Usage

After following [installation](#installation), you should be able to access it at <http://127.0.0.1:port>. Where port is what you put inside .env!

## Contributing

Contribute the best you can, but don't throw meaningless code into the mix.

## License

CC0 1.0 Universal
