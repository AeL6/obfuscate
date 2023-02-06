const zero = '+[]'
const one = '+!![]'

const number = (n) => {
  if (n == 0) return zero
  else if (n == 1) return one
  return Array.from({ length: n }, () => one).join(' + ')
}

const fromString = (s) =>
  s
    .split('')
    .map((x) => {
      return chars[x]
    })
    .join(' + ')

const chars = {}

chars.a = `(+{}+[])[${number(1)}]`
chars.b = `({}+[])[${number(2)}]`
chars.c = `({}+[])[${number(5)}]`
chars.e = `({}+[])[${number(4)}]`
chars.f = `(![]+[])[${number(0)}]`
chars.i = `((+!![]/+[])+[])[${number(3)}]`
chars.j = `({}+[])[${number(3)}]`
chars.l = `(![]+[])[${number(2)}]`
chars.n = `((+!![]/+[])+[])[${number(1)}]`
chars.o = `({}+[])[${number(1)}]`
chars.r = `(!![]+[])[${number(1)}]`
chars.s = `(![]+[])[${number(3)}]`
chars.S = `(([]+[])[${fromString('constructor')}])+[]`
chars.t = `({}+[])[${number(6)}]`
chars.u = `(!![]+[])[${number(2)}]`
chars.y = `((+!![]/+[])+[])[${number(7)}]`
// chars[' '] = `({}+[])[${number(7)}]`

for (const [key, value] of Object.entries(chars)) {
  console.log(`key: '${eval(value)}' \n ${value}`)
}
