// https://dev.to/nanythery/add-conditional-style-to-link-with-active-route-with-nextjs-and-tailwind-14ha
//
// import {
//   UserIcon,
//   ResumeIcon,
//   PortfolioIcon,
//   HomeIcon,
//   BlogIcon,
//   ContactIcon,
// } from "../components/Icons";

const MenuItems = [
    {
        label: 'Accounts',
        url: "/accounts",
        // icon: <UserIcon />,
        active: false,
    },
    {
        label: 'Transactions',
        url: "/transactions",
        // icon: <ResumeIcon />,
        active: false,
    },
    {
        label: 'Buckets',
        url: "/buckets",
        // icon: <ContactIcon />,
        active: false,
    },
    {
        label: 'Analysis',
        url: "/analysis",
        // icon: <UserIcon />,
        active: false,
    },
    {
        label: 'Connections',
        url: "/connections",
        // icon: <ResumeIcon />,
        active: false,
    },
    {
        label: 'Import',
        url: "/import",
        // icon: <ResumeIcon />,
        active: false,
    },
    {
        label: 'Todo',
        url: "/todo",
        // icon: <ResumeIcon />,
        active: false,
    },
];

export { MenuItems };
