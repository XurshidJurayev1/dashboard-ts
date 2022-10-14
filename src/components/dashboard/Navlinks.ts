import {HiOutlineClipboardCheck} from "react-icons/hi";
import {TbFileInvoice, TbHeartRateMonitor} from "react-icons/tb";
import {FaFileInvoiceDollar} from "react-icons/fa";
import {MdConfirmationNumber, MdDeleteSweep} from "react-icons/md";
import {GiBookPile, GiToken} from "react-icons/gi";
import {RiOrganizationChart} from "react-icons/ri";


const navLinks = [
    {
        name: "Bosh sahifa",
        link: "/dashboard/home",
        icon: HiOutlineClipboardCheck
    },
    {
        name: "Monitoring",
        link: "/dashboard/monitoring",
        icon: TbHeartRateMonitor
    },
    {
        name: "Hisob faktura",
        link: "/dashboard/invoice",
        icon: FaFileInvoiceDollar,
        subLinks: [
            {
                name: 'Хисоб фактуралар рўйхати',
                path: 'list'
            },
            {
                name: 'Генерация',
                path: 'generate'
            },
            {
                name: 'Ижро счёт фактура',
                path: 'ijro-invoice'
            }
        ],
    },
    {
        name: "Lot raqam aniqlash",
        link: "/dashboard/generate-lot-id",
        icon: MdConfirmationNumber
    },
    {
        name: "Buhgalteriya",
        link: "/dashboard/book-keeping",
        icon: GiBookPile,
        subLinks: [
            {
                name: 'Контрагентлар',
                path: 'agents'
            },
            {
                name: 'Дебиторлар',
                path: 'debit'
            },
            {
                name: 'Кредиторлар',
                path: 'credit'
            },
            {
                name: 'Минус баланс',
                path: 'insert-debit'
            }
        ],
    },
    {
        name: "O'chirilgan shart.",
        link: "/dashboard/removed-contracts",
        icon: MdDeleteSweep
    },
    {
        name: "Qarzdorlar",
        link: "/dashboard/debitors",
        icon: TbFileInvoice
    },
    {
        name: "Tokenlar",
        link: "/dashboard/monitoring-tokens",
        icon: GiToken
    },
    {
        name: "Tashkilotlar",
        link: "/dashboard/organizations",
        icon: RiOrganizationChart,
        subLinks: [
            {
                name: 'Ташкилотлар бўйича',
                path: ''
            },
            {
                name: 'Регионлар бўйича',
                path: 'stats-by-region'
            }
        ],
    }
];
export default navLinks
