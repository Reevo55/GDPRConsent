import { Partner } from './Partner.js';

export async function fetchPartners(): Promise<Partner[]> {
    let partners: Partner[] = [];

    const data = await fetch("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json")
                                .then(res => res.json());

    const vendorsLength = Object.keys(data.vendors).length;
    
    for (let i = 0; i < vendorsLength; i++) {
        if (data.vendors[i] !== undefined) {
            let newPartner:Partner = new Partner(data.vendors[i].id, data.vendors[i].name, data.vendors[i].policyUrl)
            partners.push(newPartner);
        }
    }

    return partners;
}