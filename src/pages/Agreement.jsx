import React from 'react'
import { Link } from 'react-router-dom';
import AgreementPDF from '../assets/agreement/Alipay Service Agreement+Schedules for Merchant by Boswin.pdf';

function Agreement() {
    return (
        <div className='w-full max-w-6xl mx-auto p-8 bg-white shadow-md print:shadow-none'>

            <div className='mt-1 mb-5 w-full flex justify-end'>
                <a href={AgreementPDF} download>
                    <p className='text-md text-blue-600 underline'>Download the Agreement</p>
                </a>
            </div>

            {/* Section A */}

            <div className='border-b-2 border-gray-200 pb-6 mb-8'>
                <h1 className='text-3xl font-bold text-center mb-4'>Schedule A</h1>
                <h2 className='text-2xl font-bold text-center text-gray-800'>BOSWIN SERVICES, SERVICE FEES AND SETTLEMENT</h2>
            </div>

            <ol className='list-decimal space-y-8 ml-1 text-justify'>
                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Service Description</div>
                    <p className='ml-4 mb-3'>a.) Under this Agreement, Boswin will provide Company with the following services (together, "<span className='font-semibold'>Boswin Services</span>")</p>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-roman' }}>
                        <li className='mb-2'>processing of Payments made by Alipay Users through Spot Payment in connection with any Transactions via <span className='font-semibold'>Alipay's Platform</span>:</li>
                        <li className='mb-2'>authorization of such Payments:</li>
                        <li className='mb-2'>services relating to settlement with Company at the Settlement Currency with respect to such Payments; and</li>
                        <li className='mb-2'>other related services and ongoing technical support in connection with any of the above</li>
                    </ol>
                    <p className='ml-4 mb-3'>The further roles and responsibilities of either Party in relation to the Boswin Services are set out in this Agreement.</p>
                    <p className='ml-4'>b.) Settlement to company is to be undertaken by DFCC Bank as per the settlement currency. Boswin is responsible to provide the settlement instructions daily to the DFCC Bank in conformity to the agreement.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Service Fee.</div>
                    <p className='ml-4 mb-3'>a.) <span className='font-semibold'>General.</span> Company shall pay Boswin the fees as set forth in Service Application Form (D) (the "Service Fee") and in accordance with Clause 2 of this Schedule A. All payments of the Service Fee shall be exclusive of any Tax.</p>
                    <p className='ml-4 mb-3'>b.) <span className='font-semibold'>Payment of Service Fee.</span> Company agrees that Boswin may deduct, in whole or in part, any Service Fee that is due and payable but have not otherwise been paid by Company, from the relevant Funds Available for Settlement.</p>
                    <p className='ml-4'>c.) <span className='font-semibold'>Over/Under-Charges.</span> If Boswin charges Company more than the Service Fee set forth in this Agreement, Boswin will return the additional Service Fee charged to Company as soon as practicable. If Boswin charges Company less than the Service Fee set forth in this Agreement, then Company shall pay the amount of outstanding Service Fee to Boswin immediately upon Boswin's request.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Alipay Settlement Process under Boswin Services</div>
                    <p className='ml-4 mb-3'>a.) <span className='font-semibold'>Bank Account.</span> Company will bear all losses arising from the incorrect information of its' banking details as provided in the Service Application Form.</p>
                    <p className='ml-4 mb-3'>b.) <span className='font-semibold'>Transaction List.</span> Boswin will make available a real-time report of all the transactions within the day and a report of all transactions will be emailed. The Transaction List shall set out Boswin's determination of the Settlement Funds and the Net Settlement Amount and in the absence of manifest error or valid dispute by the Company shall be final and binding on the Company in relation to such amounts.</p>
                    <p className='ml-4 mb-3'>c.) <span className='font-semibold'>Settlement Amount.</span> Subject to Boswin exercising its rights to withhold, deduct or set-off in accordance with this Agreement, the amount which Boswin is obliged to settle to Company under this Agreement shall be equivalent to an amount equal to the <span className='font-semibold'>"Net Settlement Amount"</span> in accordance with the formula set out below:</p>
                    <p className='ml-4 mb-3'><span className='font-semibold'>Net Settlement Amount</span> - Settlement Funds - Refunds (if any, as specified under Clause 3(e) below) - any other amount that Boswin may deduct in accordance with its rights to withhold, deduct or set-off under this Agreement; and </p>
                    <p className='ml-4'>Where: Settlement Funds - Funds Available for Settlement - Service Fee</p>

                    <p className='ml-4 mb-3'>d.) <span className='font-semibold'>Incidental Fee for Fund Transfer.</span>  in connection with remitting the Net Settlement Amount to
                        Company in accordance with this Schedule A. Company will be solely responsible for bank
                        charges involved when the settlement funds are to be transferred to a non-settlement bank of
                        Boswin. For Company's special requests, Company will be responsible for bank charges (if
                        any). For any other fees or charges imposed by beneficiary banks (where Company has a
                        bank account). intermediary banks or other payment service providers passing or receiving
                        such Net Settlement Amount on behalf of Company, Company shall be solely responsible for
                        any such fees or charges. For the purpose of this Agreement, "Initiation of remittance"
                        means Boswin submitting remittance instructions to a bank for the purpose of commencing a
                        funds transfer to the Company’s designated bank account (either directly or indirectly
                        through intermediary banks where Boswin's Affiliates have bank accounts). </p>

                    <p className='ml-4'>e.) <span className='font-semibold'>Refunds</span></p>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'upper-alpha' }}>
                        <li className='mb-2'>If an Alipay User requests and is due a Refund in accordance with Company's after-sale
                            service policy or a Refund is required by Applicable Law, Company will instruct Boswin
                            in a timely manner to make such Refund to the Alipay User's Alipay Account in
                            accordance with Alipay's Refund process. </li>
                        <li className='mb-2'>Company hereby agrees to reimburse Boswin for each such Refund and for that purpose authorizes Boswin to deduct the amount of such Refund from the Settlement Funds and return such Refund to the relevant Alipay User in accordance with this Clause 3(e).</li>
                        <li className='mb-2'>If the amount of the Settlement Funds is not sufficient to process the relevant Refund,
                            Boswin will be entitled to process the Refund only after the amount of such Settlement
                            Funds becomes sufficient to pay the amount of such Refund or after Boswin otherwise
                            receives from Company an amount sufficient to process the Refund. For the avoidance
                            of doubt. Boswin shall not be responsible for any claim or liability that the relevant
                            Alipay User may seek from Company in the event of any delay in processing such Refund.</li>
                        <li className='mb-2'>Boswin will not charge any Service Fee in respect of its deduction of Refund from the
                            relevant Settlement Funds. Any Service Fee related to a Payment that is subject to a
                            Refund and which has already been deducted from the Funds Available for Settlement
                            will be repaid to the Company by Boswin upon the Refund being paid to Boswin. </li>
                        <li className='mb-2'> Boswin only accepts and processes Refund instructions from Company if the request for
                            Refund is made within335 days from the date of the Transaction. However, if the final
                            date for a request is not a working day, the refund request must be made on the last
                            working date within the 335-day refund deadline, Company shall ensure that any refund
                            limitations mentioned under this sub-clause, e.g., the 335-day refund deadline, is notified
                            by Company to the Alipay User, whether through the provision of its after-sale service policy to the Alipay User or any other appropriate and written communication
                            that the Company has with the Alipay User, at the time of the Transaction. </li>
                        <li className='mb-2'>Company will ensure that the Refund is only effectuated through the system interface
                            provided by Boswin. Any alternative methods for the Refund, including but not limited
                            to bank remittance or topping up Company's membership account, are disallowed. </li>
                    </ol>

                    <p className='ml-4 mb-3'>f.) <span className='font-semibold'>Settlement and Settlement Limit.</span> Boswin will initiate remittance of the Net Settlement Amount in the selected Settlement Currency to Company's designated bank account as provided in the Service Application Form or as otherwise notified to Boswin in writing within <span className='font-semibold'>three (3) Working Days</span> from the date of Transaction, provided that the amount of the relevant Settlement Funds shall reach <span className='font-semibold'>USD 10</span> (or its equivalent amount in the selected Settlement Currency) (the "<span className='font-semibold'>Settlement Limit</span>"). Where the Settlement Amount is less than USD 10 (or its equivalent amount in the selected Settlement Currency), the Net Settlement Amount shall be retained until the aggregate total Net Settlement Amount due to the Company totals USD 10 (or its equivalent amount in the relevant Settlement Currency).</p>

                    <p className='ml-4 mb-3'>g.) <span className='font-semibold'>Currency Conversion.</span> Where the Service Fee or any liabilities or payment obligations that
                        the Company has to Boswin under this Agreement is in a currency other than the Settlement
                        Currency, the calculation of the Service Fee or such liability will be reasonably set by Boswin
                        with reference to the real-time market rate published by relevant third-party PRC banks as of
                        the date on which such Service Fee or liability is incurred in accordance with this Agreement. </p>

                    <p className='ml-4'>h.) <span className='font-semibold'>Enquiry Regarding Settlement.</span> Any inquiry by Company with respect to settlement shall be made in writing and Company shall provide any information reasonably required by Boswin to assist with such enquiry. Boswin will, acting in a commercially reasonable manner, assist Company in resolving the relevant matter and provide a written response to Company within <span className='font-semibold'>five (5) Working Days</span> after receiving such written enquiry from Company.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Rules for Unauthorized Payment</div>
                    <p className='ml-4 mb-3'>a.) Company agrees that if Boswin determines, in its sole discretion, that certain features of the Alipay Services (including but not limited to the Transaction Funding Channels) may be subject to high risk of Unauthorized Payment or fraudulent Transaction, Boswin may, from time to time, suspend or terminate, with reasonable notice, the provision of such part of the Alipay Services, including but not limited to adjusting the Types, issuing banks and payment limit (whether per Transaction or per day) of the payment method that Alipay Users will be able to use to complete the Payment from time to time.</p>

                    <p className='ml-4 mb-3'>b.) In any single calendar month, if the accumulative amount of Unauthorized Payments submitted on the Company's Platform exceeds (i) <span className='font-semibold'>10 USD</span> and/or (ii) <span className='font-semibold'>1/1,000,000</span> of the total Transaction Value of Transactions submitted on Company's Platform, Company will, upon Boswin's request, cooperate with Boswin to mitigate the risks of the relevant Transactions.) In the event that Company fails to adopt any precautionary measures requested by Boswin within <span className='font-semibold'>three (3) Working Days</span> of receipt of Boswin's notice, Boswin may exercise its right of termination or suspension under <span className='font-semibold'>Clause 4(d)</span> below.</p>

                    <p className='ml-4 mb-3'>c.) In the event that:</p>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'upper-alpha' }}>
                        <li className='mb-2'>Boswin reasonably suspects that Company has breached or defaulted under any material term of this Agreement;</li>
                        <li className='mb-2'>any of the events described in <span className='font-semibold'>Clauses 4b) and c)</span> above occurs in each of two (2) consecutive months;</li>
                        <li className='mb-2'>the accumulated amount of Unauthorized Payments submitted on the Company's Platform exceeds (1) 10 USD and/or (1) 1/1,000,000 of the total Transaction Value of Transactions submitted on Company's Platform in each of two (2) consecutive months; or</li>
                        <li className='mb-2'>Boswin reasonably suspects that the Company has suffered a Data Compromise and Boswin determines that such event may pose significant risks to Boswin's systems.</li>
                    </ol>

                    <p className='ml-4'>If the Company breaches this Agreement, Boswin may issue a written notice (including by email) requiring correction or additional information for further review. The first breach will be excused with a written warning. Any subsequent breach may result in immediate suspension or termination of services by written notice, and this Agreement shall thereupon be deemed terminated.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Fraud and Risk</div>
                    <p className='ml-4 mb-3'>a.) If a Boswin User claims that an Unauthorized Payment or an otherwise fraudulent Transaction has been submitted by Company and made via Boswin's Platform, Company will comply with the following rules:</p>

                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-roman' }}>
                        <li className='mb-3'>
                            <span className='font-semibold'>Transaction Evidence.</span> Company will provide the Transaction Evidence within <span className='font-semibold'>three (3) Working Days</span> upon Boswin's request.
                        </li>
                        <li className='mb-3'>
                            <span className='font-semibold'>Reimbursement.</span> If Boswin does not receive the Transaction Evidence or the Unauthorized Payment as a result of the Company's willful default or negligence, then Company will immediately pay to Boswin an amount equal to the sum that Boswin settled to Company's designated bank account regarding the Transaction in question.
                        </li>
                        <li className='mb-3'>
                            <span className='font-semibold'>Reimbursement Obligation.</span> Provided Transaction Evidence has been requested, Boswin may, having made due enquiry of the Alipay User, determine to reimburse an Alipay User in the event of any Unauthorized Payment. Company agrees to indemnify and hold Boswin harmless for the amount to be agreed between the Company and Boswin (each acting reasonably) reimbursed to the Alipay User. For the avoidance of doubt, Boswin will not be entitled to set off, withhold settlement of or deduct such sums against any monies and liabilities of Boswin in accordance with <span className='font-semibold'>Clause 7</span> of this Schedule.
                        </li>
                    </ol>

                    <p className='ml-4'>b.) The Company agrees that, if Boswin reasonably believes that a number of Transactions are Prohibited Transactions, Unauthorized Payments or otherwise fraudulent Transactions, it will on reasonable prior written notice from Boswin, provide access to Boswin to the Company's premises during normal business hours for the purpose of Boswin conducting onsite reviews of the Company's risk management capabilities and the effectiveness of the Company in rejecting Prohibited Transactions, Unauthorized Payments or otherwise fraudulent Transactions.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Boswin Payment Policies</div>
                    <p className='ml-4 mb-3'>a.) <span className='font-semibold'>Responsibilities for Service Fee and Settlement Fee.</span> Company will pay any Service Fee for using the Boswin Services and will not, directly or indirectly, transfer any such Service Fee to its Alipay Users in addition to what Company would normally charge Alipay Users for its Products in the normal course of business.</p>

                    <p className='ml-4 mb-3'>b.) <span className='font-semibold'>Alipay Wallet as Payment Method.</span> Company will not restrict its customers in any way from using Alipay Wallet as a Payment method at checkout at any sales channel, including but not limited to requiring a minimum or maximum purchase amount from customers using Alipay Wallet to make Payments.</p>

                    <p className='ml-4 mb-3'>c.) <span className='font-semibold'>Prohibited Products.</span> Company fully acknowledges that Boswin must not provide Boswin Services with respect to any Transaction which is prohibited by this Agreement (including Payments in relation to Prohibited Products), Applicable Law or violates Boswin's internal policies (as notified to the Company from time to time). Company will provide Boswin information about its Products as reasonably requested by Boswin from time to time. Company will not sell Products through Alipay's Platform where such Products contain articles prohibited from being sold to Alipay Users under any Applicable Law, including without limitation the products listed in <span className='font-semibold'>Appendix II</span> to the extent applicable, which may be updated by Boswin and notified to Company from time to time (together, "<span className='font-semibold'>Prohibited Products</span>") Company will ensure that no Transaction being submitted for Boswin's processing involves or relates to any Prohibited Products ("<span className='font-semibold'>Prohibited Transaction</span>") Boswin will have the right to refuse to provide any Boswin Services with respect to any Prohibited Transaction and Company will indemnify and hold Boswin harmless for any damages, losses and liabilities that Boswin may suffer arising from or in connection with such Prohibited Transaction.</p>

                    <p className='ml-4'>d.) <span className='font-semibold'>Storage of Transaction Information.</span> Company will maintain the records for each Transaction for the period of <span className='font-semibold'>six years</span> after the completion of the Transaction and Boswin shall be entitled to review or otherwise access such records. Subject to any legal restrictions under Applicable Law, Company will procure that Boswin, the relevant service providers of Alipay and regulators or governmental authorities having jurisdiction over Boswin be provided with or granted access to, the relevant Transaction information including but not limited to information on Company, Company's Platform, Products, and the amount, currency, time and counterparties to each Transaction, within <span className='font-semibold'>two (2) Working Days</span> of Boswin's request. Subject to a restriction under Applicable Law, Boswin will advise Company of the names of such service providers, regulatory governmental authorities and the subject matter to which such requests relate.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Set off and Withholding</div>
                    <p className='ml-4 mb-3'>Company agrees that Boswin shall be entitled, at its sole discretion, to set off, withhold settlement of or deduct any sums payable and liability of any nature from time to time due, owing or incurred by Company to Boswin (or any Boswin Affiliate) under this Agreement against any monies and liabilities of any nature, including Payments, from time to time due, owing or incurred by Boswin under this Agreement. The circumstances under which Boswin may exercise its rights under this Clause include, but are not limited to:</p>

                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-alpha' }}>
                        <li className='mb-2'>if the Company fails to comply with any term of this Agreement;</li>
                        <li className='mb-2'>if Boswin believes that the Company has or is likely to become subject to bankruptcy, insolvency, reorganization, winding up or similar dissolution procedures;</li>
                        <li className='mb-2'>if Boswin reasonably believes that there has been a material deterioration in the financial condition of the Company;</li>
                        <li className='mb-2'>if any regulatory or legal authorities require Boswin to suspend the settlement of any Transaction; and</li>
                        <li className='mb-2'>if Boswin reasonably believes that any Transaction is (i) a Prohibited Transaction, (ii) a suspicious transaction under Applicable Law, (iii) related to a failure by Company to respond to information requests or dispute enquiries raised by Boswin within a reasonable period of time or (iv) in breach of the terms and conditions set forth under this Agreement.</li>
                    </ol>

                    <p className='ml-4'>Company shall not be entitled to retain or set-off any amount owed to it by Boswin against any amount due from Company to Boswin.</p>
                </li>
            </ol>

            {/* Section B */}

            <div className='border-b-2 border-gray-200 pb-6 mb-8'>
                <h1 className='text-3xl font-bold text-center mb-4'>Schedule B</h1>
                <h2 className='text-2xl font-bold text-center text-gray-800'>ALIPAY SERVICE TERMS AND CONDITIONS THROUGH BOSWIN</h2>
            </div>

            <ol className='list-decimal space-y-8 ml-2 text-justify'>
                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Definitions</div>
                    <p className='ml-4 mb-3'>Capitalized terms not defined in this <span className='font-semibold'>Schedule B</span> will have the meaning given to them in this Agreement including those set out in <span className='font-semibold'>Appendix III</span>, unless the context requires otherwise.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Boswin Services</div>
                    <p className='ml-4 mb-3'>Boswin will provide Company certain services as described in <span className='font-semibold'>Schedule A</span>. The Parties will perform and comply with their respective responsibilities as set forth in this Agreement.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Fees</div>
                    <p className='ml-4 mb-3'>In consideration for Boswin
                        providing the Alipay Services to Company
                        in accordance
                        with the terms of this Agreement, Company will
                        pay Boswin the Service Fee as set forth in
                        <span className='font-semibold'>Service Application Form (D)</span> and other fees or
                        charges as set out in <span className='font-semibold'>Schedule A</span>. Boswin
                        reserves the right to adjust such fees within
                        <span className='font-semibold'>thirty (30) days</span> with prior written notice and in
                        the event, Company does not agree to such
                        adjusted fees, it is entitled to terminate this
                        Agreement within thirty (30) days of prior
                        written notice.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Representations and Warranties</div>
                    <p className='ml-4 mb-3'>Each Party makes each of the following representations and warranties to the other Party, and acknowledges that such other Party is relying on such representations and warranties in entering into this Agreement:</p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>4.1 Authorization.</span> Each Party represents and warrants that it has the following (collectively, the "<span className='font-semibold'>Authorization Warranties</span>"):</p>

                    <ol className='ml-10 mb-4'>
                        <li className='mb-2'><span className='font-semibold'>4.1.1</span> it is an independent corporation duly organized, validly existing and in good standing under the laws of jurisdiction of its incorporation;</li>
                        <li className='mb-2'><span className='font-semibold'>4.1.2</span> it is properly registered to do business in all jurisdictions in which it carries on business;</li>
                        <li className='mb-2'><span className='font-semibold'>4.1.3</span> it has all licenses, regulatory approvals, permits and powers legally required to conduct its business in each jurisdiction in which it carries on business; and</li>
                        <li className='mb-2'><span className='font-semibold'>4.1.4</span> it has the corporate power, authority and legal right to execute and perform this Agreement and to carry out the transactions and actions contemplated by this Agreement.</li>
                    </ol>

                    <p className='ml-4 mb-3'><span className='font-semibold'>4.2 Validity.</span>  Each Party represents and
                        warrants that once duly executed by the Party
                        this Agreement shall constitute valid and
                        binding obligations on the Party, enforceable
                        in accordance with its terms. Except as
                        otherwise stated in this Agreement, no
                        approval or consent of any person or
                        government department or agency is legally
                        or contractually required to be obtained by
                        the Party in order to enter into this
                        Agreement and perform its obligations. </p>
                    <p className='ml-4 mb-3'><span className='font-semibold'>4.3 No Conflicts.</span> Each Party represents
                        and warrants that (a) the execution of this
                        Agreement, nor (b) the consummation by the
                        Party of this Agreement will (i) conflict with
                        the certificate of incorporation or by- laws or
                        any other corporate or constitutional
                        document of the Party or (ii) breach any
                        obligations of the Party under any contract to
                        which it is a party or (1) violate any
                        Applicable Law. </p>

                    <p className='ml-4'><span className='font-semibold'>4.4 Litigation.</span> Each Party represents and
                        warrants that there is no litigation,
                        proceeding or investigation of any nature
                        pending or, to the Party's knowledge,
                        threatened against or affecting the Party or
                        any of its Affiliates, which would
                        reasonably be expected to have a material adverse effect
                        on its ability to perform its obligations under this Agreement.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Compliance with Law</div>
                    <p className='ml-4 mb-3'><span className='font-semibold'>5.1 General.</span> Each of the Parties will comply
                        with any Applicable Law in connection with the
                        operation of its business and performance of its
                        obligations under this Agreement. Company will
                        at its own cost, keep such records and do such
                        things as are reasonably necessary to ensure
                        that Boswin complies with any Applicable
                        Law; provided always that Company shall not
                        be
                        required to do anything which is inconsistent
                        with or in breach of any applicable laws. </p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>5.2 Information Verification.</span>  In order for
                        Boswin to satisfy its obligations and to comply
                        with the relevant requirements under
                        Applicable Law, upon reasonable request by
                        Boswin, Company will share records and
                        information (including Transaction information
                        and records) with Boswin from time to time and
                        Boswin is authorized by Company to provide the
                        relevant records and information to
                        governmental agencies, regulatory authorities
                        and third-party service providers for
                        examination and verification as necessary.</p>

                    <p className='ml-4'>5.3 <span className='font-semibold'>AML Requirements.</span> Company shall comply with all Applicable Law on anti-money laundering, counter-terrorism financing and sanctions (together "<span className='font-semibold'>AML</span>"). Company shall fully cooperate with Boswin's reasonable due diligence (on site or in writing) of Company's AML policies and procedures, including but not limited to sanctions and political exposed people reviews, suspicious transactions monitoring and reporting.</p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>5.4 Limitation and Reporting.</span> In
                        accordance with its AML, anti-fraud, and other
                        compliance and security policies and
                        procedures, Boswin may impose reasonable
                        limitations and controls on Company's ability
                        to utilize the Boswin Services. Such limitations may include but are
                        not limited to rejecting Payments and/or
                        suspending/restricting any Boswin Service with
                        respect to certain Transactions or customers and
                        prospective customers of Company. Boswin
                        may, for the purposes of complying with
                        relevant suspicious transaction reporting and
                        tipping- off requirements under Applicable Law,
                        report suspicious transactions to the relevant
                        authorities without informing Company. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Disclaimer</div>
                    <p className='ml-4 mb-3'>TO THE EXTENT
                        PERMITTED BY APPLICABLE LAW AND
                        EXCEPT AS OTHERWISEEXPRESSLY
                        STATED, BOSWIN DISCLAIMS ANY
                        WARRANTY OR CONDITION OF ANY
                        KIND, EXPRESS, IMPLIED, COMMON
                        LAW OR STATUTORY INCLUDING,
                        WITHOUT LIMITATIONANY IMPLIED
                        WARRANTY OF TITLE, LICENSEABILITY,
                        DATA ACCURACY, NON-
                        INFRINGEMENT. MERCHANTABILITY,
                        SATISFACTORY QUALITY, FITNESS FOR
                        APARTICULAR PURPOSE, AND USE OF
                        REASONABLE SKILL AND CARE OR
                        THAT THE BOSWIN SERVICES, THE
                        BOSWIN PLATFORM ORANY
                        APPLICATION, WEBSITE, PRODUCT
                        PROVIDED OR USED IN CONNECTION
                        WITH THE BOSWIN SERVICES WILL BE
                        ERROR FREE OR OPERATE WITHOUT
                        INTERRUPTION.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Indemnification</div>
                    <p className='ml-4 mb-3'>7.1 <span className='font-semibold'>General Indemnity.</span> General Indemnity. Subject to Clause 8
                        below, each Party <span className='font-semibold'>(the "indemnifying Party”)</span>
                        will indemnify the other Party (the "indemnified
                        Party”) from and against all actions. claims,
                        demands, liabilities, obligations, losses, costs
                        (including, but not limited to legal fees, expenses
                        and penalties) and interest suffered, incurred or
                        sustained by or threatened against the
                        indemnified Party arising out of any breach or
                        violation of this Agreement by the indemnifying
                        Party or any gross neglect, willful misconduct,
                        fraud or dishonesty by the indemnifying Party or
                        any of its employees or agents</p>

                    <p className='ml-4 mb-3'>7.2  <span className='font-semibold'>Third party IP Indemnity to Boswin</span> Company shall indemnify Boswin and its
                        Affiliates from and against all actions, claims,
                        demands, liabilities, obligations, losses, costs
                        (including. but not limited to legal fees,
                        expenses and penalties) and interest suffered,
                        incurred or sustained by or threatened against
                        Boswin or its Affiliates arising out of (i) any
                        license or the Company granted under Clause 9,
                        (ii) the exercise by Boswin or its Affiliates of
                        the rights granted to it in accordance with this
                        Agreement, or (ii) the Company's use of the
                        Boswin Services other than in accordance with
                        the terms of this Agreement, which a third party
                        alleges as constituting unauthorized use or
                        infringement of any of its Intellectual Property
                        rights <span className='font-semibold'>(“IP Claim against Boswin”).</span> </p>

                    <p className='ml-4 mb-3'>7.3  Notwithstanding anything to the contrary,
                        nothing under this Agreement shall be
                        construed to exclude or limit Company's liability
                        in connection with its obligations under Clause
                        3 of this Schedule. </p>
                    <p className='ml-4 mb-3'>7.4 With respect to any indemnity under this
                        <span className='font-semibold'>Clause 7</span>, the indemnifying entity shall be
                        referred to as "the Indemnifying Entity" and
                        each indemnified entity(ies) shall be referred
                        to as <span className='font-semibold'>“the Indemnified Entity".</span> IP Claims
                        against Boswin and any indemnification claims
                        that arise under Clause 7.1 above shall be
                        collectively referred to as “Indemnification
                        Claims”. </p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>7.5 Treatment of Indemnification Claims.</span> If an Indemnification Claim comes to the notice of an Indemnified Entity:</p>

                    <ol className='ml-10 mb-4' style={{ listStyleType: 'decimal' }}>
                        <li className='mb-2'><span className='font-semibold'>7.5.1</span>  the Indemnified Entity must
                            notify the Indemnifying Entity in writing as
                            soon as reasonably practicable after becoming
                            aware of the Indemnification Claim and so far,
                            as reasonably practical provide details of the
                            nature and amount of the Indemnification
                            Claim;</li>
                        <li className='mb-2'><span className='font-semibold'>7.5.2</span> the Indemnified Entity must, at the Indemnifying Entity's cost, promptly provide all assistance reasonably requested by the Indemnifying Entity in relation to the Indemnification Claim;</li>
                        <li className='mb-2'><span className='font-semibold'>7.5.3</span> the Indemnified Entity must take all reasonable steps to mitigate the losses, damages, costs and expenses incurred by it arising from the Indemnification Claim;</li>
                        <li className='mb-2'><span className='font-semibold'>7.5.4</span>  the Indemnifying Entity will
                            have sole control of the defense or settlement of
                            the Indemnification Claim and any related
                            settlement negotiations (albeit with the
                            Indemnified Party having a right to be
                            reasonably consulted and updated), unless
                            Boswin and the Company jointly own the IP
                            rights in the material that is the subject of the
                            Indemnification Claim, in which case, Boswin
                            and the Company will share responsibility for
                            controlling the defense of the Indemnification
                            Claim and any related settlement negotiations,
                            unless otherwise agreed between them, and </li>
                        <li className='mb-2'><span className='font-semibold'>7.5.5</span>  if, contrary to <span className='font-semibold'>Clause 7.5.4</span>, the
                            Indemnifying Entity agrees to allow the
                            Indemnified Entity to defend the
                            Indemnification Claim. the Indemnified Entity
                            must comply with the Indemnifying Entity's
                            reasonable directions in relation to the conduct
                            of such defense and must not settle the
                            Indemnification Claim without the Indemnifying
                            Entity's prior written consent. </li>
                    </ol>

                    <p className='ml-4'><span className='font-semibold'>7.6 Limitation of Liability.</span> To the extent
                        permitted under Applicable Law, under no
                        circumstances will Boswin or its Affiliates be
                        liable under any theory of tort, contract, strict
                        liability or other legal or equitable theory for
                        lost profits (whether direct or indirect). indirect,
                        incidental, special, consequential or exemplary
                        loss or punitive damages, each of which is
                        excluded by agreement of the Parties, except
                        where such losses and/or damages were
                        foreseeable and Boswin had failed to advise of
                        the possibility of such damages to the Company
                        with reasonable time.  </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Intellectual Property</div>
                    <p className='ml-4 mb-3'><span className='font-semibold'>8.1 Boswin License to Company.</span> Boswin
                        owns or has been granted the appropriate
                        licenses by the relevant owner to use, all right,
                        title and interest in and to the Boswin Services
                        and the Boswin and Alipay branding and logo,
                        including the rights to all related Intellectual
                        Property.
                        Subject to the terms of this Agreement and. as
                        the case may be, any agreement between
                        Boswin and the owner of the relevant
                        Intellectual Property, Boswin hereby grants
                        Company during the term of this Agreement, a
                        license to use the relevant Intellectual Property
                        in the Boswin Services, the Boswin and Alipay
                        Platform and the Boswin branding and logo (it
                        owns or is entitled to use) solely for the purpose
                        of using the Boswin Services in accordance with
                        this Agreement. Such license to use the relevant
                        Intellectual Property granted in favor of
                        Company is non-exclusive, non-sub licensable
                        and non- transferrable, and may be modified or
                        revoked by Boswin in writing at any time during
                        the term of this Agreement. The Company shall
                        be permitted to use Boswin's and Alipay's
                        branding and logo solely as required for the
                        purpose of using the Boswin Services and
                        strictly in accordance with the provisions of
                        <span className='font-semibold'>Clause 4 </span> of  <span className='font-semibold'>Schedule C.</span> Company agrees that
                        the licenses granted under this Clause 9 and the
                        Company's use of such Intellectual Property
                        under this Agreement will not confer any
                        proprietary right, and Company agrees to take
                        reasonable care to protect all such Intellectual
                        Property from infringement or damage and
                        cease all use of such Intellectual Property
                        immediately upon termination of this
                        Agreement. </p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>8.2 Company License to Boswin.</span>  During
                        the term of this Agreement for the limited
                        purposes of performing the obligations set
                        forth in this
                        Agreement and subject to the terms of this
                        Agreement, Company grants to Boswin a non-
                        exclusive, non-transferable, royalty- free
                        license to use, reproduce, publish, distribute
                        and transmit any of Company's marketing
                        materials, proprietary indicia or other similar
                        items containing the Intellectual Property of
                        Company ("Company IP") necessary for
                        Boswin to perform its obligations contemplated
                        by this Agreement and to refer to the name of
                        Company in the public announcement as one of
                        the partners using the Boswin Services
                        Company represents and warrants to Boswin
                        that it has obtained all necessary authorities,
                        permissions, approvals and licenses to license
                        the Company IP to Boswin and that the
                        Company IP does not infringe the Intellectual
                        Property of any third party</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Data privacy</div>
                    <p className='ml-4 mb-3'>Company shall be solely
                        responsible, where applicable, for obtaining any
                        necessary consent for the collection, use,
                        disclosure and transfer of Personal Information.
                        Each Party will take all
                        commercially reasonable endeavors to ensure that
                        the Personal Information is protected against
                        misuse and loss, or unauthorized access,
                        modification or disclosure and will promptly
                        notify the other Party of any loss of, or any
                        unauthorized disclosure of or access to, the
                        <span className='font-semibold'> Personal Information.</span> Each Party may retain
                        records of Payments for complying with
                        Applicable
                        Law and internal compliance requirements.
                        10
                        "Personal Information" means personal
                        information or data, whether true or not, and
                        whether recorded in a material form or not,
                        about an individual whose identity is apparent,
                        or can reasonably be ascertained, from the
                        information or data, processed by either Party in
                        connection with this Agreement. Boswin may
                        transfer Transaction data, including Personal
                        Information, to any of its Affiliates that have
                        been delegated any of its obligations under this
                        Agreement. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Taxes</div>
                    <p className='ml-4 mb-3'><span className='font-semibold'>10.1</span> To the extent permitted by Applicable
                        Law, all Taxes arising from or in connection
                        with all payments between Boswin and
                        Company under this Agreement shall be for the
                        account of and liability of Company, unless
                        agreed otherwise in writing by the Parties </p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>10.2</span> For the avoidance of doubt, (i) all
                        amounts payable by Company to Boswin under
                        this Agreement are exclusive of any Taxes
                        imposed by the relevant taxation authority of
                        applicable jurisdictions to which Company is
                        subject which shall be for the account of
                        Company; and (ii) any Taxes imposed by the
                        relevant taxation authority of applicable
                        jurisdictions to which Company is subject,
                        including without limitation value added tax or
                        other Taxes of similar nature, arising out of or in
                        connection with any Transaction or this
                        Agreement, shall be for the account of
                        Company.</p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>10.3</span> Each Party shall be responsible for any and all Excluded Taxes that it is liable for under Applicable Law.</p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>10.4</span> Where a Party is required under
                        Applicable Law relating to tax to fulfil its tax
                        obligations, including but not limited to
                        common reporting standard, imposed by any
                        taxation authority, the other Party shall
                        promptly provide information and documents
                        as requested by that Party to the extent
                        permitted by Applicable Law. </p>

                    <p className='ml-4'>10.5 Nothing contained in this Agreement is
                        intended to result in one Party assisting the
                        other Party to evade any Taxes in the applicable
                        jurisdictions to which the other Party is subject.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Confidential Information</div>
                    <p className='ml-4 mb-3'>Each Party
                        acknowledges that the Confidential Information
                        of the other is valuable to it and agrees to treat
                        as confidential all Confidential Information
                        received from the other Party in connection this
                        Agreement. Neither Party will disclose such
                        Confidential Information to any third party
                        except to perform its obligations under this
                        Agreement or as required by Applicable Law or
                        government authorities, and in each case, the
                        disclosing Party will, to the extent permitted
                        under Applicable Law, give the other Party prior
                        notice of such disclosure. Upon termination of
                        this Agreement or at the written request of the
                        other Party, each Party will promptly return or
                        destroy all material embodying Confidential
                        Information of the other. Notwithstanding the
                        foregoing, each Party may retain reasonable
                        copies of the other Party's Confidential
                        Information to comply with Applicable Laws or
                        in order to exercise its rights under this
                        Agreement, provided that such retained
                        Confidential Information will not be disclosed or
                        used for any other purposes. “Confidential
                        Information" means all non- public,
                        proprietary or other confidential information.
                        whether in oral, written or other form,
                        including but not limited to: the content and
                        performance of this Agreement, business plans,
                        capitalization tables, budgets, financial statements;
                        costs, prices, and marketing plans, contracts and
                        licenses, employee, customer, supplier,
                        shareholder, partner or investor lists, technology,
                        know-how, business processes, trade secrets and
                        business models, notes, sketches, flow charts,
                        formulas, blueprints, and elements thereof, and
                        source code, object code, graphical design, user
                        11
                        interfaces and other Intellectual Property,
                        including that of any customer, supplier or other
                        third party (including, in the case of Boswin, the
                        interface technologies, security protocol and
                        certificate to any other website or enterprise
                        provided by Boswin). </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Publicity</div>
                    <p className='ml-4'>Neither Party will issue any
                        press
                        release
                        or
                        make
                        any public
                        announcement
                        pertaining to this Agreement without the prior
                        written consent of the other Party unless
                        required by Applicable Law binding the
                        Party. However, the preceding limitation will
                        not be interpreted to prevent Boswin from
                        making general statements about Boswin's
                        business or about services similar to the Boswin
                        Services in or outside of the jurisdiction where
                        the Company is located. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Notice</div>
                    <p className='ml-4 mb-3'> All business correspondence in
                        relation to the business as usual operation of
                        the Boswin Services, and amendment of any
                        matters listed in the Service Application Form
                        (other than in respect of notification of a
                        change of Company legal name) will: (1) in the
                        case of notice being provided by Boswin, he
                        addressed to Company Alipay ID. and (1) in
                        the case of notice being provided by the
                        Company be sent to and sent via Company's
                        email address registered under the Company
                        Alipay ID. Other than the foregoing, all notices
                        and other communications given in connection
                        with this Agreement (including changing any
                        terms of this Agreement and, in the case of the
                        Company, notification of a change of
                        Company legal name) will be in writing, in
                        English and will be sent either by express
                        courier or facsimile to the contact details and
                        address provided by the Parties in the Service
                        Application Form. Notice will be deemed to
                        have been received: i) if sent by express courier
                        at the time the courier records delivery and (i)
                        if sent by facsimile machine, at the time of
                        successful transmission by the sending Party.
                        Notice given in any other manner will be
                        deemed not to have been
                        received unless acknowledged in writing by the
                        Party receiving the notice. Notwithstanding the
                        foregoing, the Parties agree that email
                        (including email with electronic signature blocks
                        containing the sender's name) will not constitute
                        valid service of notice to either 1) amend this
                        Agreement; or (11) notify the
                        receiving Party of any matter which will or may
                        have legal consequences for the receiving Party.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Variation</div>
                    <p className='ml-4'>No variation of this
                        Agreement shall be effective unless it is
                        in writing and signed by the Parties (or
                        their authorized representatives). For the
                        avoidance of the doubt the Parties may
                        not vary the terms of this Agreement via
                        email (including email with electronic
                        signature blocks containing the sender's
                        name).</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Term and Termination</div>
                    <p className='ml-4 mb-3'><span className='font-semibold'>15.1 General.</span> The term of this Agreement will be for a period of one (1) year from the Effective Date (the "<span className='font-semibold'>Initial Term</span>"). The Agreement will automatically renewed for successive one-year terms (each, a "Renewal Term" ) unless terminated by Company or Boswin with 30 days' notice prior to the end of the then-current Term</p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>15.2 Cause.</span>  Boswin may terminate or
                        suspend the Boswin Services (in part or in
                        whole) without notice to Company if
                        Boswin reasonably suspects that Company
                        has breached or defaulted under any term of
                        this Agreement. The Company may
                        terminate this Agreement with immediate
                        effect 1) for breach of this Agreement by
                        Boswin if such breach is curable but not
                        cured within 30 days of notice being given
                        by the Company to Boswin or (1i) for
                        material breach of this Agreement by
                        Boswin, immediately upon notice being given by
                        the Company to Boswin. For the purposes of
                        this Agreement, if Boswin becomes subject to
                        bankruptcy, insolvency, reorganization, winding
                        up or similar dissolution procedures, such
                        occurrence will be deemed a material breach by
                        12
                        Boswin of this Agreement.</p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>15.3 Boswin Compliance.</span> Notwithstanding
                        any other provision of this Agreement, Boswin
                        may terminate or suspend this Agreement, in
                        part or in full, immediately, if Boswin
                        determines, in its sole discretion, that
                        compliance with this Agreement would cause
                        Boswin or any of its Affiliates to violate or
                        potentially violet any Applicable Law to which
                        Boswin or any of its Affiliates is or becomes
                        subject to. </p>

                    <p className='ml-4 mb-3'><span className='font-semibold'>15.4 For Convenience.</span> Boswin may terminate this Agreement without cause on giving 30 days' notice to Company.</p>

                    <p className='ml-4'><span className='font-semibold'>15.5 Survival.</span> Upon termination of this
                        Agreement, the respective obligations of the
                        Parties set out in this Agreement will cease other
                        than obligations and rights of the Parties under
                        <span className='semi-bold'>Clauses 9, 10, 12, 13, 14,15 and 18 </span>of this
                        Schedule and those provisions which by their
                        terms are intended to survive any termination
                        (including payment obligations already accrued).
                        Any amounts due and payable under <span className='semi-bold'>Clause 3</span> of
                        this Schedule shall survive termination and
                        continue to be due and until such amounts are
                        paid in full by Company. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>No Agency</div>
                    <p className='ml-4'>Each Party confirms that it is entering into this Agreement in its own capacity for its own account and is not acting as nominee or agent of any other third party</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Force Majeure</div>
                    <p className='ml-4 mb-3'> No Party, its Affiliates or
                        agents will be held liable for any default, delay or
                        failure in performing its obligations under this
                        Agreement resulting directly or indirectly from
                        acts of nature, forces or causes beyond
                        such Party's, its Affiliates' or agents’ reasonable
                        control, including without limitation. (i) fire,
                        flood, clement of nature or other act of God, (ii)
                        outbreak or escalation of hostilities, war, riot or
                        civil disorder, or act of terrorism; (iii) internet
                        failure, computer, telecommunications, electrical
                        power failure or any other equipment failure, (iv)
                        labor dispute (whether or not employees’
                        demands are reasonable or within
                        the Party 's power to satisfy), (v) act or omission
                        of a government authority prohibiting or
                        impeding the affected Party (or its Affiliates or
                        agents) from performing its obligations under
                        this Agreement, including order of a domestic
                        or foreign court or tribunal, governmental
                        restriction, sanctions, restriction on foreign
                        exchange controls, etc. or (vi) the
                        nonperformance by a third party for any similar
                        cause beyond the reasonable control of the
                        Party(collectively, a "Force Majeure Event").
                        If a Force Majeure Event occurs, the non-
                        performing Party will be excused from any
                        further performance of the obligations affected
                        by the event only for as long as the Force
                        Majeure Event continues and only to the extent
                        of such Force Majeure Event and the Party
                        continues to use commercially reasonable
                        efforts to resume performance. </p>

                    <p className='ml-4'>If a Force Majeure Event occurs, the non-performing Party will be excused from any further performance of the obligations affected by the event only for as long as the Force Majeure Event continues and only to the extent such Force Majeure Event and the Party continues to use commercially reasonable efforts to resume performance.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Governing Law/Dispute Resolution</div>
                    <p className='ml-4 mb-3'><span className='font-semibold'>18.1</span> This Agreement will be governed by and construed under Sri Lankan law, without regard to its rules of conflict of laws.</p>

                    <p className='ml-4'><span className='font-semibold'>18.2</span> Any dispute, controversy or claim
                        arising out of, in connection with or relating to
                        this Agreement, including the interpretation,
                        validity, invalidity, breach or termination, will be
                        settled by arbitration. The arbitration will be
                        conducted in Sri Lanka in accordance with the
                        Sri Lanka National Arbitration Centre
                        Administered Arbitration Rules in force when a
                        Notice of Arbitration (as defined therein) is
                        submitted in accordance with the said Rules.
                        The number of arbitrators will be one (1). The
                        arbitration will be conducted in English. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Costs and Expenses</div>
                    <p className='ml-4'> Except as expressly
                        set forth in this Agreement, each Party will be
                        solely responsible for all costs and expenses
                        incurred by it in connection with providing or
                        receiving the Boswin Services. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Entire Agreement</div>
                    <p className='ml-4'>This Agreement is the entire agreement between the Parties with respect to the subject matter hereof and supersedes any previous agreements and understandings.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Assignment</div>
                    <p className='ml-4'>This Agreement and the rights and obligations of Company to this Agreement may not be assigned, transferred, sub-contracted or delegated by Company, by operation of law or otherwise.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>No Implied Waiver</div>
                    <p className='ml-4'>The waiver by either
                        Party of a breach or default of any provision of
                        this Agreement by the other Party, or the failure
                        on the part of either Party to exercise any right
                        or privilege will not be construed as a waiver of
                        any subsequent breach or default by the other
                        Party, or as a waiver of any such provision, right,
                        or privilege. </p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Relationship</div>
                    <p className='ml-4'>Nothing contained in this Agreement will be construed as creating a joint venture, partnership, agency, fiduciary or employment relationship among or between the Parties.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Severability</div>
                    <p className='ml-4'>If any provision of this Agreement is not enforceable, the remaining provisions remain valid and enforceable</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Participation of Boswin's Affiliates & others</div>
                    <p className='ml-4'>Boswin may delegate or sub-contract any or all of its obligations under this Agreement to any of its Affiliates, agents or service providers, upon prior written approval of the Company, provided that Boswin remains responsible to Company for the performance of its obligations under the Agreement</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Third Party Rights</div>
                    <p className='ml-4'>A person who is not a party to this Agreement has no rights under the Contracts (Rights of Third Parties) Ordinance (or any equivalent legislation under Applicable Law) to enforce any terms of this Agreement save that the obligations of the Company under this Agreement are owed to Boswin's Affiliates each of whom may enforce the terms of this Agreement against the Company.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Headings</div>
                    <p className='ml-4'>Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of the relevant section.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Language</div>
                    <p className='ml-4'>This Agreement has been prepared in English. In the event of any inconsistency between the original English version and any translation, the English version shall govern.</p>
                </li>
            </ol>


            {/* Section C */}

            <div className='border-b-2 border-gray-200 pb-6 mb-8 '>
                <h1 className='text-3xl font-bold text-center mb-4'>Schedule C</h1>
                <h2 className='text-2xl font-bold text-center text-gray-800'>TERMS OF USE</h2>
            </div>

            <p className='mb-8 text-justify'>These Terms of Use contain an explanation of the Boswin Services and set forth the roles and responsibilities of the Parties.</p>

            <ol className='list-decimal space-y-8 ml-1 text-justify'>
                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Responsibilities of Boswin</div>
                    <p className='ml-4 mb-3'>Boswin will use reasonable commercial efforts to perform the Boswin Services, including as follows:</p>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-alpha' }}>
                        <li className='mb-2'>Encryption Subject to Clause 7 of this Schedule C, Boswin will provide the Company with encrypted access to the Boswin Platform, including but not limited to access tb Company's interface for transmission of Transaction information configuration of the safety transmission protocol.</li>
                    </ol>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Responsibilities of Alipay</div>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-alpha' }}>
                        <li className='mb-3'><span className='font-semibold'>Safeguarding.</span> Alipay will hold all amounts payable to Company under this Agreement separate from its corporate funds.</li>
                        <li className='mb-3'><span className='font-semibold'>Bankruptcy.</span> If Alipay enters into bankruptcy or liquidation, Alipay will not voluntarily make the amounts payable to Company under this Agreement part of Alipay's bankrupted or liquidated assets, Company will have the right to collect such amounts it accordance with Applicable Law.</li>
                    </ol>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Responsibilities of DFCC Bank</div>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-alpha' }}>
                        <li className='mb-3'><span className='font-semibold'>Settlement Account.</span> For settlement process DFCC bank is responsible to create settlement accounts for company and maintain them.</li>
                        <li className='mb-3'><span className='font-semibold'>Settlement.</span> Settlement to Company is to be undertaken by DFCC Bank as per the settlement currency. Boswin is responsible to provide the settlement instructions daily to the DFCC Bank in conformity to the Merchant agreement.</li>
                    </ol>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Responsibilities of Company</div>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-alpha' }}>
                        <li className='mb-3'><span className='font-semibold'>Information Accuracy& Changes.</span> Company is responsible for ensuring that all of its information disclosed to Boswin in connection with this Agreement, is materially true, accurate and complete. Company will promptly inform Boswin of any action or event of which it becomes aware that has the effect of making materially inaccurate, any of Company's representations or warranties.</li>
                        <li className='mb-3'><span className='font-semibold'>Company Own Use/Fraud Prevention.</span> Company will only use the Boswin Services for its
                            own business operations and in such manner as stated in this Agreement. Any use of Boswin's
                            services (including the Boswin Services) by Company for the benefit of or on behalf of any third
                            party, including any use of the payment interface provided by or on behalf of Boswin i
                            connection with this Agreement, for performing any commercial or non-commercial services for
                            platforms, websites, applications operated by or on behalf of any third party, is strictly
                            prohibited. Company will ensure that the Boswin Services are not used for any purpose of
                            account top-up. account transfer or any other purpose that is solely related to funds transfer without
                            an underlying Transaction.</li>
                        <li className='mb-3'><span className='font-semibold'>Transaction Management.</span> Company, including any of Company's computer software programs, software development kits (SDK)or service procedures, will use the Boswin Platform in accordance with this Agreement and will ensure its system meets the software requirements and service process provided by Boswin with respect to order handling and goods delivery or service provision, which may be updated from time to time. Boswin will not be responsible for any loss or damage to the malfunction of Company's system.</li>
                        <li className='mb-3'><span className='font-semibold'>Boswin User Dispute.</span> Company will be solely liable for dealing with Boswin Users in relation to the complaints or rejections of Products initiated by such Boswin Users</li>
                        <li className='mb-3'><span className='font-semibold'>Operational Maintenance.</span> Company shall facilitate the provision of Boswin Services at its own costs through keeping the relevant software and hardware of cashiers (including but not limited to Spot Payment scanner, physical circuits or networks) in a good operational condition and properly linking to Boswin's Platform.</li>
                        <li className='mb-3'><span className='font-semibold'>Payment security.</span> Company will comply with all payment security requirements notified to the Company by Boswin.</li>
                    </ol>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Boswin Presentation Guidelines</div>
                    <p className='ml-4 mb-3'>Company shall display the brand or logo of Alipay in parity with all other forms of payment method accepted by Company, such as next to the point of sale at physical retail stores or on applications or promotional materials of Company (as applicable) in each case where payment options are featured for the purchase of Products.</p>
                    <p className='ml-4 mb-3'>Alipay's logo and content must be used only for the purpose of indicating acceptance of Alipay by the Company as a form of payment, unless otherwise authorized by Boswin. Company will present an accurate description of the Boswin Services in accordance with Boswin's guidelines as updated from time to time.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Allocation of a Company Alipay ID</div>
                    <p className='ml-4 mb-3'>Boswin will allocate an account to Company, which is linked to the email address provided by Company ("Company Alipay ID"). The Company Alipay ID will be used to track Transaction records and information in relation to the Boswin Services. Boswin may, in its discretion, allocate an additional Company Alipay ID to Company after receiving notification that the Company</p>
                    <p className='ml-4 mb-3'>wishes to apply for a new Boswin account from Company's registered email address. Upon receiving the Company Alipay ID, Company will be solely responsible for changing the relevant default security credentials of the Company Alipay ID to ensure its Company Alipay ID is secure and confidential. Company is solely responsible for keeping the Company Alipay ID secure and for all activity, liability and damage</p>
                    <p className='ml-4 mb-3'>resulting from Company's failure to keep the Company Alipay D confidential or secure. Company will immediately notify Boswin of any unauthorized use of the Company Alipay ID or any breach of its security. Company will not provide the Company Alipay ID credentials to any third party without Boswin's express written permission. Company agrees that all officers, employees, agents, representatives and others having access to the terminals and/or passwords have been duly authorized by Company to use the relevant Company Alipay ID on Company's behalf and to legally bind Company. Company will be responsible for all actions by current and former officers, employees, agents, representatives and others, regardless of whether authorized by Company, that access the Boswin Services using the Company Alipay-ID.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Downtime</div>
                    <p className='ml-4'>Boswin's website (www.boswingroup.com) and Boswin's Platform are subject to maintenance, repair, inspections, modifications and improvements, during which the Boswin Services may not be available. To the extent that any scheduled downtime adversely affect any Boswin Services provided to Company, such scheduled downtime will be notified by Boswin to Company with reasonable notice.</p>
                </li>

                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Cooperation</div>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'lower-alpha' }}>
                        <li className='mb-3'><span className='font-semibold'>Launch.</span> Boswin and Company will use commercially reasonable efforts to launch the Boswin Services in an efficient and cost-effective manner, which will include the implementation of the Boswin Services on the Company's Platform, the development of APIs, technical integrations, and data exchanges as necessary.</li>
                        <li className='mb-3'><span className='font-semibold'>Joint Marketing.</span> In Boswin's discretion, Boswin and Company will discuss in good faith joint marketing programs to promote the Boswin Services. Any formal marketing programs may be implemented as the Parties may agree, but in any event no sooner than one month after the Company's Platform has been successfully configured to accept the Boswin Services as a means of payment by its customers.</li>
                        <li className='mb-3'><span className='font-semibold'>Media Announcement.</span> As requested by Boswin in its discretion, Company will consult with Boswin in good faith to find the most appropriate way to announce the business cooperation between the Parties in the media and Company will share relevant Company-approved data to demonstrate success of the business relationship after six months of using the Boswin Services.</li>
                    </ol>
                </li>
            </ol>


            {/* Appendix 1 */}

            <div className='border-b-2 border-gray-200 pb-6 mb-8 '>
                <h1 className='text-3xl font-bold text-center mb-4'>Appendix I </h1>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Marketing-Related Requirements</h2>
            </div>

            <p className='mb-6 text-justify'>
                This appendix sets forth certain marketing-related obligations of the Parties as supplemented by the Alipay Marketing Guidelines for Offline Acquirers that is separately provided and updated by Alipay. The terms of the Alipay Marketing Guidelines are expressly incorporated into and form an integral part of this Agreement.
            </p>
            <ol className='list-decimal space-y-8 ml-2 text-justify'>
                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Cooperation and Joint Marketing.</div>
                    <p className='ml-4'>
                        Boswin and Company shall use commercially reasonable efforts to launch the Alipay Services in an efficient and cost-effective manner, which shall include the implementation of the Boswin Services on the Company's Platform, the development of APIs, technical integrations, and data exchanges as necessary. The Parties shall comply with the specific requirements on joint marketing and media announcement as set forth in the Boswin Marketing Guidelines for Offline Acquirer.
                    </p>
                </li>
                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Rights and responsibilities of Company.</div>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'upper-alpha' }}>
                        <li className='mb-3'>
                            <span className='font-semibold'>Presentation of Alipay's and Boswin's Brand and/or Logo.</span> Company shall display (if applicable), and Boswin shall procure that Company to displays any brand or logo of Alipay in accordance with the Alipay Acceptance Mark Display Guidelines as set forth in Alipay Marketing Guidelines for Merchants.
                        </li>
                        <li className='mb-3'>
                            <span className='font-semibold'>Assistance by Merchant's Staff.</span> Company shall ensure that its store staff comply with the Training and Assistance of Store Staff set forth in the Alipay Marketing Guidelines for Merchants.
                        </li>
                    </ol>
                </li>
                <li className='pb-4'>
                    <div className='font-semibold text-lg mb-2'>Derived Information</div>
                    <ol className='ml-10 mb-4' style={{ listStyleType: 'upper-alpha' }}>
                        <li className='mb-3'>
                            As between the Company, on the one hand, and Alipay, on the other hand, Alipay shall own all right, title and interest (including any Intellectual Property rights) in and to Alipay's Derived Information whether obtained or generated prior to, during, or after the term of this Agreement.
                        </li>
                        <li className='mb-3'>
                            <span className='font-semibold'>"Alipay's Derived Information"</span> means any information relating to or derived from the Alipay Services, Alipay's Marketing Platform, Alipay's Platform, Alipay Wallet or Alipay's websites, including Alipay User's or third parties' access to, use of, or interactions with, any of the foregoing. It shall: (1) include, without limitation, information relating to the number and value of Transactions (including involving coupons), and Alipay User traffic and viewings of webpages and notices; and (2) exclude unprocessed form of Merchant's Marketing Information.
                        </li>
                    </ol>
                </li>
            </ol>


            {/* Appendix 2 */}

            <div className='border-b-2 border-gray-200 pb-6 mb-8 '>
                <h1 className='text-3xl font-bold text-center mb-4'>Appendix II </h1>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Prohibited Product List</h2>
            </div>

            <div className='mb-8'>
                <table className='w-full border-collapse border border-gray-400'>
                    <tbody>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold w-16'>1</td>
                            <td className='border border-gray-400 px-3 py-2'>Illegal political audio-visual products and publications</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>2</td>
                            <td className='border border-gray-400 px-3 py-2'>Illegal political program channels</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>3</td>
                            <td className='border border-gray-400 px-3 py-2'>State secret documents and information</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>4</td>
                            <td className='border border-gray-400 px-3 py-2'>Pornographic and vulgar audio-visual products, channels and publications</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>5</td>
                            <td className='border border-gray-400 px-3 py-2'>Pornographic and vulgar erotic services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>6</td>
                            <td className='border border-gray-400 px-3 py-2'>Gambling devices and accessories</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>7</td>
                            <td className='border border-gray-400 px-3 py-2'>Lottery</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>8</td>
                            <td className='border border-gray-400 px-3 py-2'>Gambling service</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>9</td>
                            <td className='border border-gray-400 px-3 py-2'>Narcotics and related accessories</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>10</td>
                            <td className='border border-gray-400 px-3 py-2'>Weapons of all types (including daggers, firearms and accessories), replica weapons, ammunitions and explosives</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>11</td>
                            <td className='border border-gray-400 px-3 py-2'>Military or police equipment</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>12</td>
                            <td className='border border-gray-400 px-3 py-2'>Illegally obtained proceeds or properties as result of crime</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>13</td>
                            <td className='border border-gray-400 px-3 py-2'>Poisonous or hazardous chemicals prohibited by Applicable Law and/or the laws of the People's Republic of China</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>14</td>
                            <td className='border border-gray-400 px-3 py-2'>Batons and electric batons</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>15</td>
                            <td className='border border-gray-400 px-3 py-2'>Lock picking tools and accessories</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>16</td>
                            <td className='border border-gray-400 px-3 py-2'>Anesthetic, psychotropic or prescription medicine prohibited by the People's Republic of China illegal unregistered medicine</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>17</td>
                            <td className='border border-gray-400 px-3 py-2'>Fetal gender determination</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>18</td>
                            <td className='border border-gray-400 px-3 py-2'>Aphrodisiac</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>19</td>
                            <td className='border border-gray-400 px-3 py-2'>Medical services, including medical consulting, hypnotherapy, plastic surgery</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>20</td>
                            <td className='border border-gray-400 px-3 py-2'>Hacking services or accessories</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>21</td>
                            <td className='border border-gray-400 px-3 py-2'>Malwares</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>22</td>
                            <td className='border border-gray-400 px-3 py-2'>Software or services that may jeopardize the reputation and goodwill Boswin or any of its Affiliates or related party</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>23</td>
                            <td className='border border-gray-400 px-3 py-2'>Illegal publication of certificates issuing or carving of stamps</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>24</td>
                            <td className='border border-gray-400 px-3 py-2'>Crowd funding</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>25</td>
                            <td className='border border-gray-400 px-3 py-2'>Video chatting services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>26</td>
                            <td className='border border-gray-400 px-3 py-2'>All religious websites, publication or accessories</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>27</td>
                            <td className='border border-gray-400 px-3 py-2'>Online cemeteries and ancestor worshipping</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>28</td>
                            <td className='border border-gray-400 px-3 py-2'>Sales of personal information (e.g.: identity card information)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>29</td>
                            <td className='border border-gray-400 px-3 py-2'>Espionage equipment and accessories</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>30</td>
                            <td className='border border-gray-400 px-3 py-2'>Services or products that infringe upon personal privacy (e.g.: online activity monitoring)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>31</td>
                            <td className='border border-gray-400 px-3 py-2'>Pyramid schemes and multi-level marketing</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>32</td>
                            <td className='border border-gray-400 px-3 py-2'>Gold investment</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>33</td>
                            <td className='border border-gray-400 px-3 py-2'>Cash disbursement from credit funding sources (e.g.: credit cards)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>34</td>
                            <td className='border border-gray-400 px-3 py-2'>Counterfeit currency</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>35</td>
                            <td className='border border-gray-400 px-3 py-2'>Illegal sale of financial information (e.g.: bank accounts, bank cards)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>36</td>
                            <td className='border border-gray-400 px-3 py-2'>Stock and securities</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>37</td>
                            <td className='border border-gray-400 px-3 py-2'>Mutual Funds</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>38</td>
                            <td className='border border-gray-400 px-3 py-2'>Insurance products and platforms</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>39</td>
                            <td className='border border-gray-400 px-3 py-2'>Financial products and services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>40</td>
                            <td className='border border-gray-400 px-3 py-2'>Rebate or cashback services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>41</td>
                            <td className='border border-gray-400 px-3 py-2'>Software or products relating to trading of financial products and information</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>42</td>
                            <td className='border border-gray-400 px-3 py-2'>Single-purpose prepaid cards (including gift cards and other stored value cards)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>43</td>
                            <td className='border border-gray-400 px-3 py-2'>Illegal or un-registered fund-raising activities</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>44</td>
                            <td className='border border-gray-400 px-3 py-2'>Foreign exchange services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>45</td>
                            <td className='border border-gray-400 px-3 py-2'>Peer to peer (P2P) lending services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>46</td>
                            <td className='border border-gray-400 px-3 py-2'>Payment by instalments service</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>47</td>
                            <td className='border border-gray-400 px-3 py-2'>Trading in invoices issued within the Peoples Republic of China</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>48</td>
                            <td className='border border-gray-400 px-3 py-2'>Trading or sale of virtual currencies (e.g.: Bitcoin, Litecoin)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>49</td>
                            <td className='border border-gray-400 px-3 py-2'>Satellites and antennas</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>50</td>
                            <td className='border border-gray-400 px-3 py-2'>Archaeological and cultural relics</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>51</td>
                            <td className='border border-gray-400 px-3 py-2'>Trading or distribution of currency (both RMB and foreign currencies)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>52</td>
                            <td className='border border-gray-400 px-3 py-2'>Counterfeit or replica food products</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>53</td>
                            <td className='border border-gray-400 px-3 py-2'>Online sale of tobaccos and cigarettes</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>54</td>
                            <td className='border border-gray-400 px-3 py-2'>Fireworks and firecrackers</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>55</td>
                            <td className='border border-gray-400 px-3 py-2'>Crude oil</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>56</td>
                            <td className='border border-gray-400 px-3 py-2'>Human organs</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>57</td>
                            <td className='border border-gray-400 px-3 py-2'>Surrogacy services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>58</td>
                            <td className='border border-gray-400 px-3 py-2'>Services to facilitate plagiarism and examination fraud</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>59</td>
                            <td className='border border-gray-400 px-3 py-2'>Protected species</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>60</td>
                            <td className='border border-gray-400 px-3 py-2'>Smuggled goods</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>61</td>
                            <td className='border border-gray-400 px-3 py-2'>Sales or distribution of event tickets without license (e.g.: Olympic Games or World Expo tickets)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>62</td>
                            <td className='border border-gray-400 px-3 py-2'>Seeds</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>63</td>
                            <td className='border border-gray-400 px-3 py-2'>Real estates</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>64</td>
                            <td className='border border-gray-400 px-3 py-2'>Charitable Organizations</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>65</td>
                            <td className='border border-gray-400 px-3 py-2'>Auction sites and services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>66</td>
                            <td className='border border-gray-400 px-3 py-2'>Pawn services</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>67</td>
                            <td className='border border-gray-400 px-3 py-2'>Lucky draw</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>68</td>
                            <td className='border border-gray-400 px-3 py-2'>Sale of animals, plants or products with contagious and hazardous diseases</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>69</td>
                            <td className='border border-gray-400 px-3 py-2'>Sale of animals, plants or products originating from areas declared with an epidemic outbreak of contagious diseases</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 text-center font-semibold'>70</td>
                            <td className='border border-gray-400 px-3 py-2'>Services or products promoting unlawful public gathering</td>
                        </tr>
                    </tbody>
                </table>
                <p className='mt-4 text-sm'>As updated by Boswin from time to time</p>


            </div>

            {/* Appendix 3 */}

            <div className='border-b-2 border-gray-200 pb-6 mb-8 '>
                <h1 className='text-3xl font-bold text-center mb-4'>Appendix III </h1>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Definitions</h2>
            </div>

            <p className='mb-6 text-justify'>
                In this Agreement, unless otherwise defined in the Agreement itself, the following terms have the following meanings (for both the singular and plural)
            </p>

            <div className='mb-8'>
                <table className='w-full border-collapse border border-gray-400'>
                    <tbody>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100 w-1/4'>Affiliate</td>
                            <td className='border border-gray-400 px-3 py-2'>means (a) a director, officer, partner, member, manager, executor or trustee of such person and (b) any person directly or indirectly controlling, controlled by, or under common control with, that person. For purposes of this definition, "control," "controlling," and "controlled mean having the right to elect a majority of the board of directors or other comparable body responsible for management and direction of a person by contract, by virtue of share ownership or otherwise;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Aggregate Payment Amount</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Service Application Form(D);</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Alipay User</td>
                            <td className='border border-gray-400 px-3 py-2'>means an individual who has completed Alipay's membership registration process and has opened an Alipay Account;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Alipay Wallet</td>
                            <td className='border border-gray-400 px-3 py-2'>means a digital wallet operated by Alipay, which has stored value funded through a variety of funding sources and enables Alipay Users to make Payment for Product on Company's Platform;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Applicable Law</td>
                            <td className='border border-gray-400 px-3 py-2'>any law, regulation, rule, requirement, judgment, decree, order or directive, including, without limitation, any global, federal, country, state or local laws, rules and regulations and including those issued by governmental or regulatory authorities having jurisdiction over the relevant Party, that are applicable to a Party or its business or which the Party is otherwise subject to;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Boswin Account</td>
                            <td className='border border-gray-400 px-3 py-2'>means an account allocated to a Boswin User by Boswin upon completion of registration at Boswin's designated website at www.alipaysrilanka.com Each Boswin Account is for payment and collection between Boswin and the applicable Boswin User;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Boswin's Platform</td>
                            <td className='border border-gray-400 px-3 py-2'>means the payment processing system developed by Boswin;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Boswin Services</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to its in Clause 1 of Schedule A;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Boswin User</td>
                            <td className='border border-gray-400 px-3 py-2'>means a company or an individual who has completed Boswin's membership registration process and has opened a Boswin Account;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Company Alipay ID</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Clause 5 of Schedule C;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Company's Platform</td>
                            <td className='border border-gray-400 px-3 py-2'>means the platform on which Company uses the Boswin Services, as set forth in the Service Application</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Data Compromise</td>
                            <td className='border border-gray-400 px-3 py-2'>means any loss, theft, unauthorized access of revealing of any personal data of Boswin Users or data related to Transactions held by the Company (including its employees, agents, sub-contractors and others acting on its behalf)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Effective Date</td>
                            <td className='border border-gray-400 px-3 py-2'>means the date or the later of the dates (if different) on which this Agreement is executed by both Parties and in the event an electronic version of this Agreement is made available online by the date on which Company clicks the button 'I Agree or similar button;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Funds Available for Settlement</td>
                            <td className='border border-gray-400 px-3 py-2'>means the aggregate amount of Payments processed/collected by Alipay with respect to all Transactions yet to be settled to the Company;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Indicated Consent</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Clause E of the Service Application Form;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Intellectual Property</td>
                            <td className='border border-gray-400 px-3 py-2'>means any (i) copyright, patent, know-how, domain names, trademarks, trade names, service marks, brand names, corporate names, logos and designs (whether registered or unregistered) and all associated goodwill;(ii) applications for registration and the right to apply for registration for any of the same; and (iii) all other intellectual property rights and equivalent or similar forms of protection existing anywhere in the world (including in application programming interfaces);</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Machine-Readable Medium</td>
                            <td className='border border-gray-400 px-3 py-2'>means a medium capable of storing or accessing data in a format readable by a mechanical device via barcode code or other relevant technology</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Net Settlement Amount</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Clause 3(c) of Schedule A;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Payment</td>
                            <td className='border border-gray-400 px-3 py-2'>means the payment representing the relevant Transaction Value made or to be made by a Alipay User for the purposes of completing the relevant Transaction;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>PRC</td>
                            <td className='border border-gray-400 px-3 py-2'>means the People's Republic of China, but for the purposes of this Agreement does not include Taiwan, Hong Kong Special Administrative Region and Macao Special Administrative Region;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Product</td>
                            <td className='border border-gray-400 px-3 py-2'>means any and all goods, products, services and for items that Company makes available for sale to any person, including Alipay Users or Boswin's Platform;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Prohibited Products</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to if in Clause 6(c) of Schedule A;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Prohibited Transaction</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Clause 6(c of Schedule A;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Refund</td>
                            <td className='border border-gray-400 px-3 py-2'>means, as appropriate, either (i) the process whereby a Payment already made by a Alipay User is credited, in whole or in part to that Alipay User as instructed by Company or (ii) the amount of such returned funds</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>RMB</td>
                            <td className='border border-gray-400 px-3 py-2'>means Ren Min Bi being the lawful currency of the PRC;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Service Application Form</td>
                            <td className='border border-gray-400 px-3 py-2'>means the 'Service Application Form' at the beginning of this Agreement or its online equivalent, if any, al the Boswin website;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Service Fee(s)</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Clause 2 of Schedule A</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Settlement Currency</td>
                            <td className='border border-gray-400 px-3 py-2'>means the currency selected by Company in the Service Application Form;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Settlement Funds</td>
                            <td className='border border-gray-400 px-3 py-2'>means the amount equal to the Funds Available for Settlement less any Service Fee payable and any other amounts which Boswin are entitled to withhold, deduct or set-off in accordance with this Agreement, which is payable to Company in accordance with this Agreement;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Settlement Limit</td>
                            <td className='border border-gray-400 px-3 py-2'>means, with respect to the Settlement by Amount settlement option, the limit specified by Company in the Service Application Form that will trigger settlement in accordance with Clause 3(of Schedule A, as nominated in the Service Application Form;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Spot Payment</td>
                            <td className='border border-gray-400 px-3 py-2'>means a Payment in relation to a Transaction which is:<br />1) initiated by a Merchant by scanning the barcode (or other machine-readable format) generated in the Alipay app on a Alipay User's portable device by a device capable of accessing Machine-Readable Medium; or<br />2) initiated by an Alipay User by scanning the Merchant's barcode (or other machine-readable format) using the relevant scanning feature in the Alipay app using Alipay User's portable device capable of accessing Machine-Readable Medium, to enable Alipay Users to make cashless Payments to the Merchant using their Alipay Account;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Tax</td>
                            <td className='border border-gray-400 px-3 py-2'>means all federal, state, provincial, territorial, county, municipal, local or foreign taxes, including but not limited to sales, use, license, excise, goods and services, value added, stamp or transfer taxes, duties, imposts, levies, assessments, tariffs, fees, charges or withholdings of any nature whatsoever levied, imposed, assessed or collected by a taxation authority together with all interest penalties, fines or other additional amounts imposed in respect thereof. For the avoidance of doubt, reference to "Tax" excludes any of the foregoing which are (i) franchise taxes, or (ii) property, personal property or rental taxes, or (iii) other taxes not applicable on the Service Fee or Settlement Fee (collectively "Excluded Taxes");</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Term</td>
                            <td className='border border-gray-400 px-3 py-2'>means, as appropriate, either the Initial Term or any Renewal Term, each as defined in Clause 15 of Schedule B;</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Transaction</td>
                            <td className='border border-gray-400 px-3 py-2'>means the sale and purchase transaction of Product(s)by an Alipay User from the Company, payment for which is affected using Spot Payment</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Transaction Evidence</td>
                            <td className='border border-gray-400 px-3 py-2'>means such evidence as Boswin reasonably requires, including the names and prices of the Product(s) to which the disputed Payment relates, together with relevant proof that the Product(s)have been properly delivered or rendered to the Alipay User, and, without limitation, video footage (e.g.). Transaction receipt and the name and contact information of the Alipay User who used Spot Payment to make Payment for the Product (if collected by the Company)</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Transaction Funding Channel</td>
                            <td className='border border-gray-400 px-3 py-2'>has the meaning given to it in Clause l(b) of Schedule A</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Transaction Value</td>
                            <td className='border border-gray-400 px-3 py-2'>means, with respect to each Transaction, the amount (including any discount) payable by the Alipay User to the Company in respect of the relevant Product(s);</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Unauthorized Payment</td>
                            <td className='border border-gray-400 px-3 py-2'>means any Payment that has not been authorized by the relevant Alipay User; and</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-400 px-3 py-2 font-semibold bg-gray-100'>Working Day</td>
                            <td className='border border-gray-400 px-3 py-2'>means a day (other than a Saturday or a Sunday or any public holiday) on which banks generally are open in Sri Lanka, Hong Kong and the PRC for the transaction of normal banking business;</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default Agreement;