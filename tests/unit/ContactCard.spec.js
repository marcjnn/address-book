import { shallowMount } from "@vue/test-utils";
import ContactCard from "@/components/contact/ContactCard";

const contact = {
  firstName: "Maurycy",
  lastName: "Hopeta",
  email: "maurycy@hopeta.com",
  country: "Poland",
};

describe("ContactList", () => {
  test("Contains first and last name as full name", () => {
    const wrapper = shallowMount(ContactCard, {
      propsData: {
        contact,
      },
    });

    expect(wrapper.find(".contact__name").text()).toBe("Maurycy Hopeta");
  });

  test("Contains contact email", () => {
    const wrapper = shallowMount(ContactCard, {
      propsData: {
        contact,
      },
    });

    expect(wrapper.find(".contact__item").text()).toEqual(expect.stringContaining("maurycy@hopeta.com"));
  });

  test("Contains contact country", () => {
    const wrapper = shallowMount(ContactCard, {
      propsData: {
        contact,
      },
    });

    expect(wrapper.find(".contact__item").text()).toEqual(expect.stringContaining("Poland"));
  });
});
