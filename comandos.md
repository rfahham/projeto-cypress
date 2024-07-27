# Alguns comandos

## wait

Wait for a number of milliseconds or wait for an aliased resource to resolve before moving on to the next command.

Syntax

cy.wait(time)
cy.wait(alias)
cy.wait(aliases)
cy.wait(time, options)
cy.wait(alias, options)
cy.wait(aliases, options)

### Usage

> cy.wait(2000) // wait for 2 seconds

## dblclick

https://docs.cypress.io/api/commands/dblclick

Double-click a DOM element.

It is unsafe to chain further commands that rely on the subject after .dblclick().

Syntax

.dblclick()
.dblclick(options)
.dblclick(position)
.dblclick(position, options)
.dblclick(x, y)
.dblclick(x, y, options)

### Usage

cy.get('button').dblclick() // Double click on button
cy.focused().dblclick() // Double click on el with focus
cy.contains('Welcome').dblclick() // Double click on first el containing 'Welcome'