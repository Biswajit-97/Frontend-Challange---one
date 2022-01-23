import { shallow, mount } from "enzyme";

import MemberRow from "components/MemberRow/MenberRow";

const row = {
  id: "4",
  name: "Caterina Binotto",
  email: "caterina@mailinator.com",
  role: "member",
};

describe("<MemberRow />", () => {
  let wrapper;

  it("member row renders correctly", () => {
    wrapper = mount(<MemberRow row={row} />, {
      attachTo: document.createElement("tbody"),
    });
  });

  it("checkbox is initially unchecked", () => {
    expect(wrapper.find('input[type="checkbox"]').prop("checked")).toBe("");
  });

  it("accepts row props", () => {
    expect(wrapper.props().row).toEqual(row);
  });
});
