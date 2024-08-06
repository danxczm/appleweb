'use client';

import { appleImg, bagImg, searchImg } from '@/utils';
import Image from 'next/image';
import styled from '@emotion/styled';
import { navLists } from '@/constants';

const Navbar = () => {
  return (
    <NavbarHeader>
      <NavbarNav className="screen-max-width">
        <Image src={appleImg} alt="apple" width={14} height={18} />
        <NavbarList>
          {navLists.map(nav => (
            <NavbarItem key={nav}>{nav}</NavbarItem>
          ))}
        </NavbarList>
        <NavbarIconList>
          <Image src={searchImg} alt="search" width={19} height={19} />
          <Image src={bagImg} alt="bag" width={19} height={19} />
        </NavbarIconList>
      </NavbarNav>
    </NavbarHeader>
  );
};

export default Navbar;

const NavbarHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem;

  @media (min-width: 640px) {
    padding: 1.25rem 2.5rem;
  }
`;

const NavbarNav = styled.nav`
  width: 100%;
  display: flex;
`;

const NavbarList = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;

  @media not all and (min-width: 640px) {
    display: none;
  }
`;

const NavbarItem = styled.div`
  padding: 0 1.25rem;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  cursor: pointer;
  color: rgb(134 134 139);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &:hover {
    color: white;
  }
`;

const NavbarIconList = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.75rem; /* 28px */

  @media not all and (min-width: 640px) {
    justify-content: flex-end;
    flex: 1 1 0%;
  }
`;
