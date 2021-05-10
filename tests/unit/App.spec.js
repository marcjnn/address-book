import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import TheNavigation from "@/components/layout/TheNavigation";
import TheFooter from "@/components/layout/TheFooter";

describe("App", () => {
  test("Contains navigation", () => {
    const wrapper = shallowMount(App);

    const navigation = wrapper.findAllComponents(TheNavigation);
    expect(navigation).toHaveLength(1);
  });

  test("Contains footer", () => {
    const wrapper = shallowMount(App);

    const footer = wrapper.findAllComponents(TheFooter);
    expect(footer).toHaveLength(1);
  });
});
