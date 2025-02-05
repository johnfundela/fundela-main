/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { headerPath } from "@/components/commons/constant";
import { FadeIn, FadeInLeft, FadeInRight } from "../motion/fade-in";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <>
      <FadeIn>
        <RenderSocialLinks></RenderSocialLinks>
        <Navbar
          className="mx-auto max-w-screen-4xl px-4 py-2 m-0"
          style={{
            background: "#1F2937",
            border: "none",
            borderRadius: 0,
          }}
        >
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="/"
              color={path === "/" ? "white" : "teal"}
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
              <FadeInLeft>
                <Image
                  className="ml-2"
                  src="/logo.png"
                  height={100}
                  width={150}
                  alt="logo"
                ></Image>
              </FadeInLeft>
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              <span className="material-symbols-outlined text-teal">menu</span>
            </Button>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </Navbar>
      </FadeIn>
    </>
  );
};

function NavList() {
  // const path = usePathname();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 flex justify-center lg:items-center">
      {headerPath.map((item, index) => (
        <div key={`nav-header-${index}`}>
          <FadeInRight>
            {item.children ? (
              <NavListMenu menu={item} />
            ) : (
              <Typography
                as="a"
                href={item.path}
                variant="h6"
                style={{color:"#eee"}}
                // color={path === "/" ? "#eee" : "white"}
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 ">
                  {item.name}
                </ListItem>
              </Typography>
            )}
          </FadeInRight>
        </div>
      ))}
    </List>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavListMenu({ menu }: any) {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuViewMore, setIsMenuViewMore] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderItems = (children: any[]) => {
    return children.map(({ name, path }: any, key: number) => (
      <a href={`${menu.path}${path}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              // color={pathName === "/" ? "white" : "teal"}
              className="flex items-center text-sm font-bold text-[#eee]"
            >
              {name}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ));
  };
  const renderViewMore = (children: any[]) => {
    return (
      <Menu
        placement="right-start"
        open={menuViewMore}
        handler={setIsMenuViewMore}
        allowHover
        offset={15}
      >
        <MenuHandler className="flex items-center">
          <ListItem
            className="flex items-center gap-3 rounded-lg"
            onClick={() => setIsMenuViewMore((cur) => !cur)}
            selected={menuViewMore}
          >
            <Typography
              variant="h6"
              color={pathName === "/" ? "white" : "teal"}
              className="flex items-center text-sm font-bold"
            >
              View More Options
            </Typography>
            <div className="flex justify-center items-center">
              <span
                className={`material-symbols-outlined hidden transition-transform lg:block ${
                  menuViewMore ? "rotate-180" : ""
                }`}
              >
                keyboard_arrow_down
              </span>
            </div>
          </ListItem>
        </MenuHandler>
        <Collapse open={menuViewMore}>
          <div className=" mx-4">{renderItems(children)}</div>
        </Collapse>
      </Menu>
    );
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="h6"
            // color={pathName === "/" ? "white" : "teal"}
            className="font-medium justify-center flex text-[#eee]"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Typography
                variant="h6"
                // color={pathName === "/" ? "white" : "white"}
                className="flex items-center text-sm font-bold text-[#eee]"
              >
                {menu.name}
              </Typography>
              <div className="hidden lg:block flex justify-center items-center">
                <span
                  className={`material-symbols-outlined hidden transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  keyboard_arrow_down
                </span>
              </div>
              <div className="block lg:hidden flex justify-center items-center">
                <span
                  className={`material-symbols-outlined block transition-transform  ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  keyboard_arrow_down
                </span>
              </div>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className={`hidden max-w-screen-xl rounded-xl lg:block m-0 overflow-hidden border border-teal-500 bg-[#1F2937]`}
        >
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {menu.seeMore
              ? renderItems(menu.children.slice(0, 3))
              : renderItems(menu.children)}
            {menu.seeMore &&
              renderViewMore(menu.children.slice(3, menu.children.length))}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {menu.seeMore
            ? renderItems(menu.children.slice(0, 3))
            : renderItems(menu.children)}
          {menu.seeMore &&
            isMobileMenuOpen &&
            renderViewMore(menu.children.slice(3, menu.children.length))}
        </Collapse>
      </div>
    </>
  );
}

const RenderSocialLinks = () => {
  return (
    <div
      className="flex justify-between items-center grid grid-cols-2 bg-[#14B8A6] h-10 md:h-25"
      style={{ background: "#14B8A6", height: "auto", padding: "10px", gap: "5px"}}
    >
      <div className="ml-6 col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-start">
        <a target="_blank">
          <svg
            style={{cursor: "pointer"}}
            className="text-3xl text-white mr-4 hover:text-[#1F2937]"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        </a>
        <a target="_blank">
          <svg
            style={{cursor: "pointer"}}
            className="text-3xl text-white mr-4 hover:text-[#1F2937]"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
            />
          </svg>
        </a>
        <a>
          <svg
            style={{cursor: "pointer"}}
            className="text-3xl text-white mr-4 hover:text-[#1F2937]"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
            />
          </svg>
        </a>
        <a>
          <svg
            style={{cursor: "pointer"}}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="text-3xl text-white mr-4 hover:text-[#1F2937]"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 6.7011719 7 L 10.642578 12.632812 L 6.90625 17 L 8.2382812 17 L 11.240234 13.484375 L 13.697266 17 L 17.537109 17 L 13.351562 11.009766 L 16.773438 7 L 15.462891 7 L 12.759766 10.160156 L 10.552734 7 L 6.7011719 7 z M 8.5664062 7.9882812 L 10.052734 7.9882812 L 15.683594 16.011719 L 14.1875 16.011719 L 8.5664062 7.9882812 z"
            ></path>
          </svg>
        </a>
      </div>

      <div className="mr-6 col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-end ">
        <div className="mx-4 text-white font-semibold flex items-center">
          <span className="material-symbols-outlined mx-2">call</span>
          <span className="text-xs lg:text-lg">(833) 333-0020</span>
        </div>
        |
        <div className="mx-4 text-white font-semibold flex items-center">
          <span className="material-symbols-outlined mx-2">mail</span>
          <span className="text-xs lg:text-lg">info@fundela.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
