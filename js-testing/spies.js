function spyOn(Object, method) { ... }

const dateSpy = spyOn(Date, 'now');

Date.now()

console.log(dateSpy.called.length > 0) // boolean - was it called or not?