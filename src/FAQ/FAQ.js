import React from 'react';
import HumanIcon from '../SharedPages/svgs/HumanIcon.svg';
import { Link } from "react-router-dom";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
    document.body.style.overflow = 'unset';
    return (
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How long is NAF 2023?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The festival will run from 14 February to 17 March 2023.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What can I do at NAF 2023?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        We have a ton of exciting segments for you to explore: our Publicity Booth and Style This In your Style activity under Glimmer, NTU Explo! under Starburst, various Workshops under Interstellar, and the Arts Market, performance showcase Ophiuchus, and visual and literary arts showcase Collide under Orbit. Find out more under our Programmes tab!
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I did not know I can only sign up for one workshop and have already
                        signed up, but I prefer a different workshop!
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
                        Please head to your user profile page by clicking the <img src={HumanIcon} class="w-[20px] h-[20px] inline"></img>
                        icon at the navigation bar. You can view the workshops you have been registered/waitlisted for and cancel the one you have already signed up for; we will then begin processing a refund for you via PayNow/Paylah to the number you input when signing up. Please be patient, as this may take some time!
                    </div>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I was waitlisted for the workshops, when will I know if I get a
                        slot?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Slots will be allocated to waitlisted individuals on a first-come-first-serve basis. Do check your email regularly in case a slot has been freed up for you, and the workshop should also appear under "Confirmed Workshop"s on your profile. Should you receive a slot, remember to make payment at your profile within 48 hours to secure it!
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I am unable to make it for my workshop session, how do I release my
                        booking?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Please inform us at least 24 hours before your workshop so that we may give others on the waitlist a chance to attend the workshop. Do note that back-outs that did not inform at least 24 hours prior or no-shows will not be entitled to a refund of fees paid.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Help! I don’t know where my workshop session is located.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        You may either refer to our website for the workshop locations, or
                        consult NTU Maps{' '}
                        <a href="https://maps.ntu.edu.sg/" style={{ color: '#3393FF' }}>
                            here
                        </a>
                        .
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How do I know my order/delivery status for purchase(s) made on the
                        Online Marketplace?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The status of your orders will be updated through notification emails. Please note that deliveries will be handled by the respective vendors, and NAF will not be able to update you on specific delivery status. For any inquiries regarding delivery, please reach out to the vendor you have purchased from directly.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What if I cannot come down to collect the items personally?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        You may assign a proxy to collect the items for you. Please ensure
                        that the proxy has a copy of the confirmation email as proof of
                        purchase. No goods will be released for collection unless the
                        confirmation email is shown.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I really like this workshop but I have been waitlisted, can I be
                        given priority on the workshop waitlisted?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Please note that slots will be allocated strictly on a first-come-first-serve basis, and no bumping up of waitlist slots will be entertained.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        I want a refund for the purchase made.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Unfortunately, we will not be entertaining returns or refunds for any purchases made. Please check your cart before confirming your order.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What data is being collected from users?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Please head to over to our{' '}
                        <Link to="/privacypolicy" class='text-blue-400'>
                            privacy policy
                        </Link>{' '}
                        to read up more.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default FAQ