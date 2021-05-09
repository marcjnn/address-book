import { shallowMount } from "@vue/test-utils";
import ContactCard from "@/components/contact/ContactCard";
// import BaseButton from "@/components/ui/BaseButton";

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

    expect(wrapper.find(".contact__item").text()).toEqual(
      expect.stringContaining("maurycy@hopeta.com")
    );
  });

  test("Contains contact country", () => {
    const wrapper = shallowMount(ContactCard, {
      propsData: {
        contact,
      },
    });

    expect(wrapper.find(".contact__item").text()).toEqual(
      expect.stringContaining("Poland")
    );
  });

  // test("Contains edit and delete", () => {
  //   const wrapper = shallowMount(ContactCard, {
  //     propsData: {
  //       contact,
  //     },
  //   });
  //   const buttons = wrapper.findAllComponents(BaseButton);
  //   expect(buttons).toHaveLength(2);
  // });

  test("Edit button triggers edit contact", async () => {
    const wrapper = shallowMount(ContactCard, {
      propsData: {
        contact,
      },
    });
    await wrapper.find(".btn--success").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("edit-contact");
  });
});
