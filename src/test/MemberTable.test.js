import React from "react";
import { shallow } from "enzyme";

import MembersTable from "components/MemberTable/MemberTable";

const members = [
  {
    id: "1",
    name: "Aaron Miles",
    email: "aaron@mailinator.com",
    role: "member",
  },
  {
    id: "2",
    name: "Aishwarya Naik",
    email: "aishwarya@mailinator.com",
    role: "member",
  },
  {
    id: "3",
    name: "Arvind Kumar",
    email: "arvind@mailinator.com",
    role: "admin",
  },
  {
    id: "4",
    name: "Caterina Binotto",
    email: "caterina@mailinator.com",
    role: "member",
  },
];

describe("<MembersTable />", () => {
  it("member table renders correctly", () => {
    const wrapper = shallow(<MembersTable members={members} />);
  });
});
