/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { RiBarChartFill, IoMdPeople } from '../images/icons/index'

const components = {
    dashboard: {
        component: 'Dashboard',
        url: '/dashboard',
        title: 'Painel de Controle',
        icon: RiBarChartFill,
        menu: true,
    },
    partners: {
        component: 'Partners',
        url: '/parceiros',
        title: 'Lista de Parcerias',
        icon: IoMdPeople,
        menu: true,
    },
    partnershipRequest: {
        component: 'PartnershipRequest',
        url: '/solicitacao-parceria',
        title: 'Solicitação de Parceria',
        icon: IoMdPeople,
        menu: true,
    },
    partnerCoupons: {
        component: 'PartnerCoupons',
        url: '/coupons',
        title: 'Meus Cupons',
        icon: IoMdPeople,
        menu: true,
    },
    createCoupon: {
        component: 'CreateCoupon',
        url: '/criar-cupom',
        title: '',
        icon: IoMdPeople,
        menu: false,
    },
    membersList: {
        component: 'MembersList',
        url: '/socios',
        title: 'Lista de Sócios',
        icon: IoMdPeople,
        menu: true,
    },
}

// component's access to roles.
const rolesConfig = {
    club: {
        routes: [components.dashboard, components.membersList],
    },
    partner: {
        routes: [
            components.partnerCoupons,
            components.partnershipRequest,
            components.partners,
            components.createCoupon,
        ],
    },
    common: {
        routes: [],
    },
}

export default rolesConfig
