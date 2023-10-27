import React from "react";
import faker from "faker";

const initialContacts = Array.from({ length: 400 }, (_, id) => ({
  id: id + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  address: faker.address.streetAddress()
}));

export default initialContacts;
