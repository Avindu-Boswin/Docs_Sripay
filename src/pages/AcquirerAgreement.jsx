import React from "react";

function AcquirerAgreement() {
    return (
        <div className="w-full max-w-6xl mx-auto p-8 bg-white shadow-md print:shadow-none">
            {/* Download Link */}
            <div className="mt-1 mb-5 w-full flex justify-end">
                <a href="/Alipayplus_Sub_Acquirer_Agreement.pdf" download>
                    <p className="text-md text-blue-600 underline">Download the Agreement</p>
                </a>
            </div>

            {/* Title */}
            <div className="border-b-2 border-gray-200 pb-6 mb-8">
                <h1 className="text-3xl font-bold text-center mb-2">
                    AliPay+ Services Provider Agreement – Sub Acquirer [Offline Spot Payment]
                </h1>
                <p className="text-center text-gray-600">
                    This Alipay+ Service Provider Agreement for IPG (online) and offline payments
                </p>
            </div>

            {/* Body (previous sections above here remain unchanged) */}
            <div className="prose max-w-none text-justify text-gray-900 leading-relaxed">
                {/* ...keep all your earlier paragraphs/definitions/clauses here... */}

                {/* CONTINUATION of 3.4(b) sub-items (we ended at iii) “Business”) */}
                <ol className="list-[lower-roman] ml-6 mt-2 space-y-2">
                    <li>
                        iii) requiring submission by the Sub Merchant of true copies of valid Business
                        Registration, Form 1, Sri Lankan National Identity Card or Passport of
                        Director/s, Partner/s and/or the Proprietor as applicable including Sub
                        Merchants’ bank account statements for last 3 months along with original
                        board resolution (if applicable), provided the above documents are obtained by
                        Acquirer and provided to Bank in electronic format.
                    </li>
                </ol>

                {/* 3.4(c) – (j) */}
                <ol className="list-decimal ml-6 mt-4 space-y-3">
                    <li value={3}>
                        (c) not allow any Sub Merchant to request an Authorization, if the Sub Merchant is on
                        the "Black list" of the Sub-Acquirer which is provided by the Sub-Acquirer at the
                        execution of this Agreement and may be update time to time when required and informed
                        to the Acquirer.
                    </li>
                    <li>
                        (d) not allow any Sub Merchant to request an Authorization, if it is aware the Sub
                        Merchant is engaged in any of the businesses described as prohibited, under Clause 6.1.
                    </li>
                    <li>
                        (e) facilitate and provide all reasonably required information/documents to the
                        Sub-Acquirer including for the quarterly assessments report to the Payment and
                        Settlement Department of Central Bank of Sri Lanka on the Alipay+ Payment Gateway and
                        QR Payment System.
                    </li>
                    <li>
                        (f) maintain confidentiality of Payment Transactions and Cardholder data and not reveal
                        any information relating to Payment Transactions to any third party for any purpose
                        whatsoever, except as required to perform its obligations under this Agreement. The
                        Acquirer agrees to ensure that its Acquirer and other related service providers shall
                        maintain such confidentiality and the Acquirer will be responsible for any breach of
                        confidentiality of its and other related acquirers <span className="ml-2 inline-block">7</span>
                    </li>
                    <li>
                        (g) not engage any third party (other than any Acquirer Group Companies) in the
                        Payment Transactions without prior written consent of the Sub-Acquirer.
                    </li>
                    <li>
                        (h) not share with any person the passwords assigned by the Sub-Acquirer to the
                        employees, directors, officers or contractors of the Acquirer or any Acquirer Group
                        Companies, using the IPG Administration Module.
                    </li>
                    <li>
                        (i) at all times comply with all applicable laws, rules, regulations and/or directions
                        issued by any governmental or non-governmental authority/entity in Sri Lanka
                        regulating the conduct of the business of the Acquirer, including but not limited to
                        the Directions.
                    </li>
                    <li>
                        (j) the Acquirer and/or the Acquirer Group Companies must hold PCI-DSS certification
                        and ensure such certification is maintained.
                    </li>
                </ol>

                {/* 3.5 */}
                <p className="mt-4">
                    3.5 The Bank grants to the Acquirer and the Acquirer Group Companies and the Sub
                    Merchants during the term of this Agreement, a non-exclusive licence to use each of the
                    Card Issuer names and the names of any other payment options agreed on by the parties,
                    trade names, trademarks, logos and symbols, with prior approval from the Sub-Acquirer
                    and provided such use is in accordance with the template guides approved or provided by
                    the Sub-Acquirer. The Bank confirms that it holds the necessary rights to provide this
                    licence and agrees to provide files containing the latest trade names and logos to the
                    Acquirer, as may be updated from time to time.
                </p>

                {/* 4. OBLIGATIONS OF THE BANK */}
                <h2 className="text-2xl font-bold mt-8 mb-3">4. OBLIGATIONS OF THE BANK</h2>
                <p>
                    4.1 The Bank shall provide their Alipay+ Payment Gateway and QR Payment System,
                    including the IPG Administration Module and access to its API, to the Acquirer
                    following the execution of this Agreement. The Bank will be responsible for the proper
                    functionality of their Internet Payment Platform/Gateway and the Sub-Acquirer’s Host
                    System.
                </p>
                <p>
                    4.2 The Bank shall comply with all laws, rules, regulations and/or directions issued by
                    any governmental or non-governmental authority/entity regulating its conduct and the
                    conduct of the business of the Acquirer including but not limited to the Directions.
                </p>
                <p>
                    4.3 The Bank shall maintain confidentiality of Payment Transactions and Sub Merchant
                    Customer data and shall ensure that the Acquirer shall only have access to sensitive
                    information of cardholders including card number, card security code and expiry date, to
                    the extent strictly required by the Acquirer and/or the Acquirer Group Companies to
                    perform its obligations under this Agreement as a PCI-DSS certified acquirer.
                </p>
                <p>
                    4.4 The Bank shall ensure that a dedicated bank account, the Settlement Account, is
                    opened in the name of the Acquirer to facilitate Payment Transactions. The moneys held
                    in the <span className="inline-block ml-1">8</span> Settlement Account (“Custodial Funds”) will be co-mingled as
                    between the Sub-Merchants, but will not be co-mingled with any amounts owned by or owed
                    to the Acquirer. As the custodian of the Settlement Account, the Sub-Acquirer has the
                    following rights and responsibilities:
                </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        (b) to hold the Custodial Funds on behalf of and for the benefit of the Service
                        Provider as the legal holder and each Sub-Merchant as the ultimate beneficial holder
                        of the Custodial Funds to the extent of any net amounts owed to each of the in respect
                        of their respective Payment Transactions;
                    </li>
                    <li>
                        (c) to pay into the Settlement Account the amount of each Payment Transaction submitted
                        there under which is under the control and purview of Bank, less the Bank’s Discount
                        and the Acquirer’s Discount and any other agreed fees in connection with such Payment
                        Transaction, as agreed in accordance with this Agreement;
                    </li>
                    <li>
                        (d) upon the instruction of the Acquirer (including through the submission of any
                        transaction settlement files and any other standing instructions), to make payments
                        from the Settlement Account to the nominated bank account of a Sub-Merchant of
                        Custodial Funds held in the Settlement Account on behalf of such Sub-Merchant on the
                        same day which instructions are so received (or next banking day if the day on which
                        instructions are so received is not a banking day);
                    </li>
                    <li>
                        (e) accrue and pay into the Settlement Account any interest amount which is applicable
                        to the Custodian Funds at such rate as may be agreed between the Service Provider and
                        the Sub-Acquirer;
                    </li>
                    <li>
                        (f) ensure that sufficient funds are available at all times to enable a withdrawal of
                        the full amount of the Custodial Funds at any time;
                    </li>
                    <li>
                        (g) otherwise deal with the Custodial Funds in accordance with the instructions of the
                        Acquirer;
                    </li>
                    <li>
                        (h) keep detailed records for at least 7 years and provide daily statements to the
                        Acquirer of amounts paid into and withdrawn from the Settlement Account, including a
                        breakdown by Sub-Merchant;
                    </li>
                    <li>
                        (i) provide all necessary assistance to the Acquirer in respect of any request for
                        information or audit of any matter relating to the Settlement Account and/or Custodial
                        Funds; and
                    </li>
                    <li>
                        (j) comply with all applicable laws, regulations, directions and policies, and
                        exercise due care and comply with its fiduciary duties, in respect of the Settlement
                        Account and the holding of the Custodial Funds as contemplated in this Agreement,
                        including ensuring all settlements to Sub-Merchants are processed within the timelines
                        stipulated by the Central Bank of Sri Lanka, as well as ensuring compliance with any
                        other applicable direction, circular or guideline of the Central Bank of Sri Lanka.
                    </li>
                </ol>

                <p className="mt-3">
                    4.6 The Bank shall ensure that final settlements to the Sub Merchants are processed
                    within the timelines stipulated by the Central Bank of Sri Lanka, except the
                    Sub-Acquirer, at its discretion, may hold funds due to suspicious / fraudulent/
                    disputed activities, in accordance with applicable laws and/or Card scheme rules, for a
                    reasonable period until such matter is resolved and provided notice that funds are being
                    withheld is immediately notified to the Acquirer.
                </p>
                <p>
                    4.7 Bank shall review and approve the applications forwarded by the Acquirer for
                    registration of Sub Merchants prior to registering as a Sub Merchant in the respective
                    Internet Payment Platform/Gateway and shall maintain a record of all Sub Merchants
                    registered in the Alipay+ Payment Gateway and QR Payment System.
                </p>
                <p>
                    4.8 The Bank shall monitor the operations of the Alipay+ Payment Gateway and QR Payment
                    System and advise the Acquirer immediately of any technical issues or faults.
                </p>
                <p>
                    4.9 In respect of any approval that the Acquirer is required to obtain from the
                    Sub-Acquirer in accordance with this Agreement, the Sub-Acquirer will diligently consider
                    each such request and act reasonably and promptly without delay in determining whether to
                    provide such approval.
                </p>

                {/* 5. SERVICE PROVIDER’S SOFTWARE */}
                <h2 className="text-2xl font-bold mt-8 mb-3">5. SERVICE PROVIDER’S SOFTWARE</h2>
                <p>5.1 The parties acknowledge and agree that:</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        (a) the Acquirer may develop and/or use computer software, programming, code and
                        processes owned by the Acquirer, Acquirer Group Companies or licensed from a third
                        party (“Acquirer’s Software”) in the performance of its obligations under this
                        Agreement. In particular, the Service Provider may use its own PCI-compliant software
                        and provide its own web front-end and merchant administration interface, each of which
                        are Acquirer’s Software;
                    </li>
                    <li>
                        (b) the Acquirer may integrate its own Payment Transaction Internet Payment
                        Platform/Gateway into the Sub Merchant’s Website/s; and
                    </li>
                    <li>
                        (c) such integration may require changes to the software, programming and/or computer
                        code of the Acquirer’s Software, which will automatically be owned by and form part of
                        the Acquirer’s Software.
                    </li>
                </ol>
                <p>
                    5.2 Notwithstanding any such integration, the parties agree that the Acquirer’s Software
                    shall at all times be owned by Acquirer. Nothing in this Agreement shall be deemed to
                    grant any rights, title or interest in or to the Acquirer’s Software to the
                    Sub-Acquirer. <span className="inline-block ml-2">10</span>
                </p>
                <p>
                    5.3 The Bank acknowledges that the Acquirer’s Software forms valuable intellectual
                    property and confidential trade secrets of the Acquirer. Accordingly, the Sub-Acquirer
                    agrees not to: (a) use or access the Acquirer’s Software without the prior approval of
                    the Acquirer; (b) disclose any information regarding the Acquirer’s Software to any
                    third party; or (c) make any claim that it has any right, title or interest in or to any
                    part of the Acquirer’s Software.
                </p>

                {/* 6. WEBSITE REQUIREMENTS */}
                <h2 className="text-2xl font-bold mt-8 mb-3">6. WEBSITE REQUIREMENTS</h2>
                <p>6.1 The Acquirer shall require Sub Merchants to ensure their Websites comply with the following:</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        the Website/s contain a prominent notice stating that the Card payment transactions
                        conducted with the Sub Merchants comply with SSL or other security conditions agreed
                        between the parties, which notice shall also feature therein the relevant marks as
                        required by the Sub-Acquirer to convey that the Website is a secure site;
                    </li>
                    <li>
                        the Website/s does not contain any name, trade name, trademark, logo or other
                        symbol of the Sub-Acquirer unless specifically approved by the Sub-Acquirer in writing,
                        however it may include those permitted under Clause 3.5;
                    </li>
                    <li>
                        the Website/s shall not contain any materials that are of an illegal nature, or may
                        be reasonably regarded as pornographic, defamatory or of scandalous character;
                    </li>
                    <li>
                        no gambling, prostitution, pornography or other activities of an illegal nature
                        (except for duly licensed lucky draws) shall be carried out on the Website; and
                    </li>
                    <li>
                        any other reasonable request that the Sub-Acquirer may make from time to time as
                        agreed by the Acquirer.
                    </li>
                </ol>
                <p>
                    6.2 The Acquirer will require that each Sub Merchant represents that it has and shall
                    maintain (for so long as this Agreement is in force) all necessary powers, authorities
                    and rights (including without limitation any copyrights and other intellectual property
                    rights) to lawfully offer and provide the goods and/or services and services for the time
                    being offered or provided on the Website/s.
                </p>

                {/* 7. CASH PAYMENT, CURRENCY AND EQUIPMENT */}
                <h2 className="text-2xl font-bold mt-8 mb-3">7. CASH PAYMENT, CURRENCY AND EQUIPMENT</h2>
                <p>
                    7.1 The Acquirer will require the Sub Merchants to agree not to receive any cash payment
                    from a Cardholder with respect to charges for goods and/or services included in a Payment
                    <span className="inline-block ml-1">11</span> Transaction without having completed the transaction processing procedures set
                    out in this Agreement.
                </p>
                <p>
                    7.2 All Payment Transactions must be denominated on the Sub Merchant’s Website/s in Sri
                    Lankan Rupees/ US Dollars unless otherwise agreed in writing between the Sub-Acquirer and
                    the Acquirer.
                </p>
                <p>
                    7.3 If the parties agree that the Sub-Acquirer will provide Equipment to Sub Merchants,
                    the Sub-Acquirer will deliver the Equipment to Sub Merchants, whether directly or via the
                    Acquirer, as the case may be, to the nominated delivery address promptly after a request
                    is submitted by the Acquirer. The Acquirer will inform the Sub Merchant that the
                    Equipment is provided on the basis that such Sub Merchant:
                </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        keep the Equipment safe in the Sub Merchant’s custody and all Equipment shall be at
                        their risk while on the Sub Merchant’s premises;
                    </li>
                    <li>
                        take reasonable steps to not allow the Equipment (or any part thereof) to be used,
                        without the Sub-Acquirer's prior written consent, in any place other than the premises
                        in Sri Lanka at which the Equipment was initially installed or in any way other than as
                        contemplated in this Agreement;
                    </li>
                    <li>
                        take reasonable steps to not allow the Equipment (or any part thereof) to be
                        copied, reproduced, amended, modified, reverse assembled, reverse compiled or disclosed
                        to any unauthorised person in any manner without the Sub-Acquirer's prior written
                        consent;
                    </li>
                    <li>
                        take reasonable steps to return any Equipment (and any reproductions or copies
                        thereof) to the Sub-Acquirer and/or the Acquirer upon demand;
                    </li>
                    <li>
                        permit and assist any person authorised by the Sub-Acquirer, upon reasonable prior
                        notice being given, to enter the Sub Merchant’s premises at any reasonable time to
                        inspect, update or remove the Equipment (or any part thereof);
                    </li>
                    <li>

                        at all times maintain in good working order the Equipment and promptly report any
                        damage or loss or theft of, the Equipment (or any part thereof) to the Sub-Acquirer
                        immediately;
                    </li>

                    <li>
                        complies with the operating instructions, training materials and support services and
                        other materials in relation to the Equipment as the Sub-Acquirer may provide from time
                        to
                        time;
                    </li>
                    <li>

                        acquires no title or any rights whatsoever in relation to the Equipment except that the
                        Sub Merchant may use the Equipment for the purpose of effecting, handling and/or
                        processing in accordance with this Agreement;
                    </li>
                    <li>

                        shall restrict access to the Equipment to its trained officers or employees who need
                        such access to perform their duties and who shall comply with this Clause 7.3 and
                        shall not at any given time allow access to any third party to use the Equipment other
                        than a Customer as necessary for a Payment Transaction; and
                    </li>
                    <li>

                        shall take such steps as may be necessary to obtain and maintain appropriate
                        Authorization and approvals to enable it to use the Equipment under the terms of any

                        licence pursuant to which the Sub-Acquirer acquires the right to use the same, as advised
                        by
                        the Sub-Acquirer from time to time.
                    </li>
                </ol>
                <p>
                    7.4
                    If the Acquirer permits Sub Merchants to accept Payment Transactions
                    through hardware or technology other than Equipment ("Other Devices”), the
                    Acquirer will inform the Sub Merchant that it must only do so on the basis
                    that the Sub Merchant:
                </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        ensures that the Other Devices are acceptable to the Sub-Acquirer;
                    </li>
                    <li>
                        ensures that the extraction of data from Cards must be in the manner specified by the
                        Bank (this may vary from time to time but the Sub-Acquirer will give prior notice of
                        variation
                        to the Sub Merchant);
                    </li>
                    <li>
                        ensures that the amount of the transaction and any further information (such as
                        cardholder number and data) which the Sub-Acquirer from time to time requires must be
                        printed on a terminal receipt which should be in a form approved by the Sub-Acquirer;
                    </li>
                    <li>
                        ensures that the Other Devices, software technical standards and procedures for the
                        electronic extraction, retention and transmission of data for the purposes of this
                        Agreement must be approved by, or (as the case may be) in accordance with the
                        requirements of the Sub-Acquirer;
                    </li>
                    <li>
                        for Card-Present Transactions, requires the Cardholder to sign the credit card
                        slip/sales invoice recording the relevant sales, to the extent applicable;
                    </li>
                    <li>

                        for Card-Present Transactions, verifies the Customer's signature against the signature
                        on the back of the Card to ascertain that they are the same;
                    </li>

                    <li>
                        for Card-Present Transactions, ensures there is no discrepancy between the embossed
                        and displayed Card number before completing the transaction;
                    </li>
                    <li>
                        for Card-Present Transactions, deliver to the Customer a true and completed copy of
                        the credit card slip; and
                    </li>
                    <li>

                        collect the daily transaction detail report for accounting purposes. The Bank's copy
                        shall be matched by terminal number and then transaction sequence order together
                        with the deposit summary.
                    </li>

                </ol>
                {/* 7. CASH PAYMENT, CURRENCY AND EQUIPMENT */}
                <h2 className="text-2xl font-bold mt-8 mb-3">8. TRANSACTION HANDLING</h2>
                <p>8.1 The Acquirer only use the Settlement Account to process Payment Transactions for
                    the transactions of the Sub Merchant/s. The Acquirer must not sub-contract its right to
                    process Payment Transactions granted under this Agreement to any third party outside of
                    the
                    Acquirer Group Companies.</p>
                <p>8.2 The Acquirer will not and will require that the Sub Merchant will not: (a) effect two or
                    more Payment Transactions to avoid obtaining Authorization from the Sub-Acquirer; (b)
                    effect two or
                    more Payment Transactions to avoid having to obtain Authorization which would not
                    otherwise have been given by the Sub-Acquirer. The Acquirer shall not effect a Payment Transaction when only a part of the amount due to the Sub Merchant from the Cardholder
                    is
                    included as the transaction amount.</p>
                <p>8.3 The Acquirer will require that the Sub Merchant comply with any rules, regulations,
                    directives, guidelines, instructions and procedures which the Sub-Acquirer may from
                    time to time
                    issue for the purpose of encryption or authentication of SSL or such other security
                    conditions
                    agreed between the parties.</p>
                <p>8.4 The Acquirer shall only adopt the security conditions matching with the electronic
                    commerce indicator(s) as agreed with the Sub-Acquirer for handling and submitting any
                    Payment
                    Transactions. The Acquirer shall obtain the prior consent of the Sub-Acquirer if it
                    proposes to
                    change the security conditions and level of security used in relation to a Payment
                    Transaction
                    (provided that unsecured transactions, being those with no security and no encryption,
                    will not
                    be permitted).</p>

                <h2 className="text-2xl font-bold mt-8 mb-3">9. SUBMISSION OF PAYMENT TRANSACTIONS AND REFUNDS VIA IPG</h2>
                <p>9.1 The Acquirer shall only adopt the security conditions matching with the electronic
                    commerce indicator(s) as agreed with the Sub-Acquirer for handling and submitting any
                    Payment
                    Transactions. The Acquirer shall obtain the prior consent of the Sub-Acquirer if it
                    proposes to
                    change the security conditions and level of security used in relation to a Payment
                    Transaction
                    (provided that unsecured transactions, being those with no security and no encryption,
                    will not
                    be permitted).</p>
                <p>9.2
                    The Acquirer may submit Payment Transactions to the Sub-Acquirer for processing (as
                    agreed with the Sub-Acquirer) via;</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        the Alipay+ Payment Gateway and QR Payment System; or
                    </li>
                    <li>
                        a valid email,
                        in accordance with such operational guidelines as may be specified by the Sub-Acquirer
                        from time to
                        time. Whatever the means of submission, the Acquirer shall submit a Payment
                        Transaction to the Sub-Acquirer for processing within seven (7) days after Authorization
                        for such
                        transaction has been obtained. Once an Authorization has been received, the Sub-
                        Acquirer agrees to
                        promptly (and in any case on a T+2 basis) process such Payment Transaction including
                        making a payment equivalent to the value of such transaction (less the Sub-Acquirer’s
                        Discount and
                        other permitted deductions) into the Settlement Account.
                    </li>


                </ol>
                <p>9.4 </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        If in respect of any Payment Transaction:
                    </li>

                    <ol className="list-[lower-roman] ml-6 mt-2 space-y-2" >
                        <li> any goods and/or services are not received by the Sub Merchant Customer
                            or are lawfully rejected or accepted for return; </li>
                        <li> the transaction is not performed or cancelled; </li>
                        <li> the price is disputed by the Cardholder or price adjustment is allowed,
                            the Acquirer shall submit a refund transaction to the Sub-Acquirer through one of the
                            means referred to in Clause 9.2 and in accordance with Clause 9.3. </li>

                    </ol>
                    <li>
                        The Acquirer must submit a refund transaction to the Sub-Acquirer within seven (7)
                        days after the date a refund is agreed between the Sub Merchant and the Sub
                        Merchant Customer. The Acquirer is required to refund the net proceeds (i.e.
                        the total credit less the Acquirer’s Discount) to the Sub-Acquirer forthwith.
                        The Acquirer shall only present a refund transaction to the Sub-Acquirer
                    </li>
                    <ol className="list-[lower-roman] ml-6 mt-2 space-y-2" >
                        <li>in respect
                            of a Payment Transaction that has been submitted to the Sub-Acquirer for payment and

                            the amount of which does not exceed the amount of the related Payment Transaction. </li>


                    </ol>

                </ol>
                <p>9.5
                    By submitting a Payment Transaction to the Sub-Acquirer, the Acquirer confirms that the
                    Sub
                    Merchant has warranted and agreed:-</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        that all transaction details so submitted are, within the knowledge of the Sub
                        Merchant, true and complete;
                    </li>
                    <li>
                        that the Sub Merchant has supplied, or will be required to supply, the goods and/or
                        services to which such Payment Transaction relates and to the value stated therein
                        and at a price not greater (and on terms not less favourable) than the price (and terms)
                        at and on which such goods and/or services are supplied by the Sub Merchant for
                        cash;
                    </li>
                    <li>
                        that no other Payment Transaction submission will be made in respect of the goods
                        and/or services to which such Payment Transaction relates; and
                    </li>
                    <li>
                        that to its knowledge, the provision of credit for the supply of the goods and/or
                        services to which such Payment Transaction relates is not unlawful;
                    </li>
                </ol>

                <p>9.6
                    In the event a Sub Merchant requires to process a refund, the Sub Merchant should
                    contact the
                    Acquirer and request to process a refund transaction. The Acquirer should,
                    prior to processing the refund, arrange the recovery of the refund amount either through
                    the
                    future sale of the Sub Merchant or via some alternate arrangement. Upon processing the
                    refund by the Acquirer:-</p>
                <ol className="list-[lower-roman] ml-6 mt-2 space-y-2" >
                    <li>The Acquirer may recover the refund amount through the Sub Merchant's
                        current or future settlement proceeds, or via some alternate arrangement agreed with
                        the Sub Merchant. </li>
                    <li>In the event that the Acquirer's commission amount is insufficient to cover
                        the refund amount, the Sub-Acquirer will debit the Acquirer's account maintained
                        with the Sub-Acquirer for the due amount and simultaneously foreclose the debit balance. </li>
                    <li>The Bank will recover the refund amount from the Acquirer's commission
                        amount during the daily settlement process. </li>
                    <li>In the event (iii) is not feasible, the Sub-Acquirer will request the Acquirer to issue
                        a payment draft for an amount communicated by the Sub-Acquirer, and enforce a manual
                        foreclosure, or failing which, recover any due amounts from any collateral
                        maintained by the Acquirer with due notice. </li>



                </ol>
                <h2 className="text-2xl font-bold mt-8 mb-3">10. PAYMENT</h2>
                <p>10.1
                    Subject to Clause 9.2 and the other terms of this Agreement, the Sub-Acquirer shall
                    promptly pay (and
                    in any case on a T+2 basis) to the Acquirer the amount of each Payment Transaction
                    submitted hereunder that is accepted by the Sub-Acquirer in accordance with this
                    Agreement, less the
                    Bank’s Discount for such Payment Transaction.-</p>
                <p>10.2
                    Net payments of Payment Transactions shall be made by the Sub-Acquirer by bank
                    transfer to the
                    Settlement Account.-</p>
                <p>10.3
                    Payment by a party shall be without prejudice to any claims or rights which such party
                    may
                    have against the other party and shall not constitute any admission by the paying party as
                    to
                    the performance by the other party of its obligations under this Agreement and the
                    amount
                    payable to such other party.-</p>
                <p>10.4
                    Where:-</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        an amount of refund is due to any Sub Merchant Customer pursuant to the refund
                        procedure set out in Clause 9; and/or
                    </li>
                    <li>
                        a payment amount is due to the Sub-Acquirer pursuant to Clause 10; and/or
                    </li>
                    <li>
                        an over-payment has been made to the Acquirer by the Sub-Acquirer due to
                        mathematical errors or otherwise; and/or
                    </li>
                    <li>
                        an amount of interest is charged by the Sub-Acquirer on the amount of any refund
                        transaction
                        which is not submitted through the Alipay+ Payment Gateway and QR Payment System
                        as required
                        under this Agreement within the period referred to in Clause 9.4(b) or paid in full as
                        required under Clause 9.4, such interest to be calculated at the rate then currently
                        charged to Sub Merchant Customers in respect of their indebtedness from the due
                        date until the date of payment (as well after as before any demand made or judgement
                        obtained) (the last day of the said period being the due date for the purpose of the
                        calculation of such interest); and/or
                    </li>
                    <li>
                        one or more other sums are due from or payable by the Acquirer to
                        the Sub-Acquirer in connection with Payment Transactions hereunder, (such refund,reimbursement, over-payment, interest and/or other sum are collectively referred to as
                        the “outstanding amount”), the Sub-Acquirer may set-off against or deduct from the
                        Settlement Account, such outstanding amounts, in whole or part
                    </li>

                </ol>
                <h2 className="text-2xl font-bold mt-8 mb-3">11. CHARGEBACKS</h2>
                <p>The Bank shall be entitled, in accordance with any applicable Card scheme rules, at any
                    time
                    to refuse total or partial payment to the Acquirer in respect of a Payment Transaction
                    or, if payment has been made, to seek reimbursement from the Acquirer through the
                    refund process, notwithstanding any Authorization and/or Authorization Code numbers
                    given
                    by the Sub-Acquirer to the Acquirer, in the event that:</p>
                <ol className="list-[lower-roman] ml-6 mt-2 space-y-2">
                    <li>
                        the Sub Merchant has not complied with the applicable Authorization procedures for
                        SSL or for other agreed security conditions in respect of a Payment Transaction;
                    </li>
                    <li>
                        the Payment Transaction was not submitted for processing within the time period
                        specified in Clause 9.2 or is not submitted in accordance with this Agreement; or
                    </li>
                    <li>
                        the Sub Merchant Customer disputes the transaction or the Sub-Acquirer on reasonable
                        grounds suspects the transaction to be fraudulent.
                    </li>
                    <li>
                        for Card-Present Transactions:
                    </li>
                </ol>
                <ol className="list-[upper-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        the Cardholder’s signature is missing when signature is required;
                    </li>
                    <li>
                        the Cardholder's signature on the sales slip or credit card slip or any other
                        document required to be signed by the Cardholder/Customer in relation to the
                        transaction is a forgery or the Cardholder's signature on the credit card slip or
                        the document does not match the signature on the Card used for the
                        transaction;
                    </li>
                    <li>
                        the copy of the sales slip or terminal receipt or any other document required to
                        be signed by the Customer in relation to the transaction presented to the Sub-Acquirer
                        or retained by the Sub Merchant is incompatible with any copy provided to the
                        Customer;
                    </li>
                    <li>
                        Cardholder's account number is found to be omitted, incomplete or invalid, or
                        Cardholder's account number is not imprinted;
                    </li>
                    <li>
                        the Card presented to the Sub Merchant in respect of the Transaction has been
                        altered or had not yet become valid or had expired at the time of the Payment
                        Transaction; or
                    </li>
                    <li>
                        the sales slip or credit card slip or any part thereof is illegible, incomplete or
                        unsigned or not prepared or completed or submitted in accordance with this
                        Agreement.
                    </li>
                </ol>
                <h2 className="text-2xl font-bold mt-8 mb-3">12. DISCOUNT RATES AND OTHER CHARGES</h2>
                <p>12.1  The Bank’s Discount will be: </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        (Domestic Cards) in relation to Payment Transactions performed using Cards issued
                        in Sri Lanka, [...………....]% of the value of each Payment Transaction;
                    </li>
                    <li>
                        (International Cards) in relation to Payment Transactions performed using Cards
                        issued outside of Sri Lanka, [..………....]% of the value of each Payment Transaction;
                    </li>
                    <li>
                        (DFCC issued LankaQR) in relation to LankaQR code Payment Transactions which
                        are processed using the LankaQR Customer’s bank account which is not held with
                        the Sub-Acquirer, [........]% of the value of each Payment Transaction plus the “LCPL
                        Fee” as
                        mandated by the Central Bank of Sri Lanka in Circular No. 02 of 2019 or any circular
                        which updates, amends or replaces such circular; and
                    </li>
                    <li>
                        (Non-DFCC issued LankaQR) in relation to LankaQR code Payment Transactions
                        which are processed using the LankaQR Customer’s bank account which is held with
                        the Sub-Acquirer, [.....]% of the value of each Payment Transaction plus the “LCPL Fee”
                        as
                        mandated by the Central Bank of Sri Lanka in Circular No. 02 of 2019 or any circular
                        which updates, amends or replaces such circular,
                        or such other amounts as may be agreed by mutual agreement in writing of the parties
                        from
                        time to time.
                    </li>
                </ol>
                <p>12.2
                    The Acquirer’s Discount rate may be determined by the Acquirer in its sole
                    discretion. The Acquirer may deduct, withhold, pay or transfer any amount to satisfy
                    the Acquirer’s entitlement to the Acquirer’s Discount from a Payment
                    Transaction, including from the Settlement Account or Sub Merchant’s bank account,
                    and
                    transfer such amount to the c or any other bank account of the Acquirer </p>
                <p>
                    12.3
                    The Acquirer’s Discount rate may be determined by the Acquirer in its sole
                    discretion. The Acquirer may deduct, withhold, pay or transfer any amount to satisfy
                    the Acquirer’s entitlement to the Acquirer’s Discount from a Payment
                    Transaction, including from the Settlement Account or Sub Merchant’s bank account,
                    and
                    transfer such amount to the c or any other bank account of the Acquirer
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-3">13. BREACH OF AGREEMENT</h2>
                <p> Without prejudice to Clause 9.4 and the Sub-Acquirer’s right to terminate this Agreement
                    under
                    Clause 21, in the event of suspected breach by the Acquirer, the Sub-Acquirer will
                    provide
                    written notice to the Acquirer to remedy such breach. If such breach is not remedied
                    within 30 business days, the Sub-Acquirer may terminate this Agreement by giving sixty
                    (60) days’
                    written notice to the Acquirer.</p>
                <h2 className="text-2xl font-bold mt-8 mb-3">14. EVIDENCE AND TRANSACTION RECORDS</h2>
                <p>
                    14.1
                    The Acquirer will, promptly at the Sub-Acquirer’s reasonable request (and whether or not
                    the
                    same is disputed by the Sub Merchant Customer) request the Sub Merchant produce (and
                    the
                    Acquirer will forward) to the Sub-Acquirer evidence satisfactory to the Sub-Acquirer of
                    why the Sub
                    Merchant Customer’s Card or bank account (as the case may be) should be debited with
                    any

                    Payment Transaction amount and (but without prejudice to the foregoing) will require
                    Sub
                    Merchants to retain all documents and records relating to each Payment Transaction
                    (including without limitation a copy of the record referred to in Clause 14.3) for a period
                    of
                    not less than one year thereafter in the event the Sub-Acquirer requests that such evidence
                    be produced
                    to the Sub-Acquirer.
                </p>
                <p>
                    14.2
                    The Acquirer shall provide such reasonable assistance as is within its ability, means
                    and control, for the prevention and detection of fraud in respect of any Payment
                    Transaction as
                    the Sub-Acquirer may from time to time request.
                </p>
                <p>
                    14.3
                    n respect of a Card-Not-Present Payment Transaction, the Acquirer will require the
                    Sub Merchant to provide to the Cardholder a record of the Payment Transaction (by
                    electronic
                    means, surface mail or other generally acceptable methods acceptable) and such record
                    shall
                    include:
                </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        the Sub Merchants’ URL or on-line address;
                    </li>
                    <li>
                        a list of any restrictions on returns or refunds;
                    </li>
                    <li>

                        a description of goods and/or services supplied;
                    </li>
                    <li>

                        the name of the Sub Merchant and, if the supplier of goods and/or services is not the
                        Sub Merchant, the supplier;
                    </li>
                    <li>
                        the transaction amount and currency;
                    </li>
                    <li>

                        the Authorization Code and the date of obtaining the same;
                    </li>
                    <li>

                        the the Sub Merchants’s delivery policy and any related restrictions,
                        provided that, if such record is sent by electronic means, it must not contain the full Card
                        and/or account data.
                    </li>

                </ol>
                <h2 className="text-2xl font-bold mt-8 mb-3">15. CHANGE OF PARTICULARS</h2>
                <p>The Acquirer shall upon request from the Sub-Acquirer, request the Sub Merchant to
                    provide
                    to Acquirer for passing onto the Sub-Acquirer, information regarding any substantive
                    change
                    to the information submitted in accordance with Clause 3.4(b). </p>

                <h2 className="text-2xl font-bold mt-8 mb-3">16. DISCLAIMER</h2>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        A party shall not be under any liability to the other party for: (i) indirect losses,
                        including consequential losses, loss of profit or otherwise, for any suspension,
                        interruption, error or failure in any computer systems, software or internet
                        availability required (including the Alipay+ Payment Gateway and QR Payment System
                        and Bank’s
                        Host System) for performing or processing Payment Transactions (or in any part
                        thereof) except where such suspension, interruption, error or failure arises as a result
                        of the such party’s gross negligence or wilful default; or (ii) direct losses, except where such suspension, interruption, error or failure arises as a result of an act,
                        omission, negligence or default of such party.
                    </li>
                    <li>
                        A party shall not be under any liability to the other party for any honest error carried
                        out in connection with this Agreement, except where such error is as a result of the
                        Bank’s gross negligence and wilful default of such party.
                    </li>
                    <li>
                        Except as expressly provided to the contrary in this Agreement or in any
                        Authorization granted to the Acquirer in connection with the Authorization,
                        on Facilities, all terms, conditions, warranties, undertakings inducements or
                        representations whether express, implied, statutory or otherwise (including without
                        limitation any terms about merchantability or satisfactory quality or fitness for any
                        particular purpose) relating in any way to the Authorization System or the
                        Authorization Facilities are excluded.
                    </li>
                    <li>
                        Notwithstanding anything in this Clause 16, the Sub-Acquirer represents, warrants and
                        undertakes at all times during the term of this Agreement:
                    </li>



                    <ol className="list-[lower-roman] ml-6 mt-2 space-y-2">
                        <li>
                            of the such party’s gross negligence or wilful default; or (ii) direct losses, except where such suspension, interruption, error or failure arises as a result of an act,

                        </li>
                        <li>
                            it holds and will continue to hold all necessary licences, permits and approvals
                            to perform its obligations under this Agreement;
                        </li>
                        <li>
                            it is in compliance with all applicable laws, regulations and government directions and policies, including banking laws, consumer protection laws,
                            data protection laws, competition laws, anti-money laundering laws and anti-
                            corruption laws; and

                        </li>
                        <li>
                            nothing in its constitutional documents or any law, regulation or agreement
                            conflicts with this Agreement or prevents the Sub-Acquirer from entering into and
                            performing this Agreement.

                        </li>



                    </ol>
                    <li>
                        Notwithstanding anything else in this Agreement, neither party will be liable for
                        delay or non-performance of its obligations due to Force Majeure. Force Majeure
                        means floods, strikes, fire, civil commotion, acts of terrorism, pandemics, riots,
                        government regulations / legislative requirements and any other event of force
                        majeure, which prevents the affected party from performing its obligations under this
                        Agreement. In the event of either party being prevented or delayed from carrying out
                        its obligations hereunder due to Force Majeure, the affected party shall immediately
                        notify the other party of the commencement of such event of Force Majeure, upon
                        which its obligations under this Agreement will be suspended. Upon the termination
                        of such event of Force Majeure (which shall be notified by the affected party to the
                        other) this Agreement shall continue.
                        Provided however, that an event of Force
                        Majeure results in this Agreement being suspended, frustrated by the performance of
                        obligations hereunder being rendered impossible or by such event of Force Majeure
                        continuing, over a period of at least 60 days, resulting in the other party’s objective in
                        entering into this Agreement being defeated, the party not affected by the event of Force Majeure, may with written notice to the affected party, terminate this
                        Agreement with 30 days written notice.

                    </li>
                </ol>
                <h2 className="text-2xl font-bold mt-8 mb-3">17.
                    INDEMNITY</h2>
                <p>17.1 The Acquirer will indemnify the Sub-Acquirer on demand in respect of any actions,
                    claims,
                    costs, damages, demands, expenses, losses and liabilities as determined by a court of
                    competent jurisdiction made against, suffered or incurred by the Sub-Acquirer arising
                    directly from or
                    in connection with: </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        any failure by the Acquirer to comply with the provisions of this Agreement;
                        and/or
                    </li>
                    <li>
                        the Acquirer’s security failure, corruption or illegal act of collusion.
                    </li>
                </ol>
                <p>17.2 The Bank shall indemnify the Acquirer and each of the Acquirer Group
                    Companies in respect of any actions, claims, costs, damages, demands, expenses, losses
                    and
                    liabilities (including reasonable attorney fees) arising from any breach of this Agreement,
                    any
                    representation or warranty provided by the Sub-Acquirer under this Agreement being
                    untrue or
                    incorrect, or in connection with the gross negligence or wilful misconduct of the Sub-
                    Acquirer. </p>
                <p>17.3 In relation to any claim relating to a matter referred to in Clause 17.1 where the Sub-
                    Acquirer and the
                    Acquirer are joint defendants, the Sub-Acquirer will be entitled to have full conduct of
                    (and be
                    responsible for all costs of) all proceedings and negotiations, except any final settlement
                    or
                    compromise, which shall be prior approved by the Acquirer. Acquirer will
                    provide reasonable assistance in connection with any such claim that the Sub-Acquirer
                    may require. </p>
                <h2 className="text-2xl font-bold mt-8 mb-3">18.
                    LIMITATION OF LIABILITY</h2>
                <p> Notwithstanding anything in this Agreement, the Acquirer’s liability under this
                    Agreement is
                    limited to the aggregate of all the Acquirer’s Discounts paid to the Acquirer under this
                    Agreement. </p>
                <h2 className="text-2xl font-bold mt-8 mb-3">18.
                    LIMITATION OF LIABILITY</h2>
                <p> Notwithstanding anything in this Agreement, the Acquirer’s liability under this
                    Agreement is
                    limited to the aggregate of all the Acquirer’s Discounts paid to the Acquirer under this
                    Agreement. </p>
                <h2 className="text-2xl font-bold mt-8 mb-3">18.
                    CONFIDENTIALITY</h2>
                <p>19.1 To the extent the Acquirer has access to Cardholder data, the Acquirer shall
                    not, and shall put processes in place to ensure that the Acquirer’s or the Sub
                    Merchant/s’ officers, employees or agents (including without limitation any Processor)
                    shall
                    not, unless compelled by law or with the prior written consent of the Sub-Acquirer: </p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        sell, purchase, provide, exchange or disclose information of a Cardholder or his
                        Payment Transactions (howsoever obtained and in whatever form the information
                        shall take) to, from or with any third party (other than to the Sub-Acquirer or Service
                        Provider’s or Sub Merchant’s agents for the sole purpose of assisting the Sub-Acquirer or Acquirer or Sub Merchant to complete or enforce the Payment Transactions
                        and the Sub-Acquirer or Acquirer’s or Sub Merchant’s insurers and professional
                        advisers); or
                    </li>
                    <li>
                        request or use such information (including any Card account number) for any
                        purpose that the Acquirer or Sub Merchant (as the case may be) knows or
                        should have reasonably known to be fraudulent or for any purpose that the
                        Cardholder did not authorise.
                    </li>
                </ol>
                <p>19.2 The Acquirer shall keep strictly confidential all information received from the Sub-
                    Acquirer in
                    connection with the business of the Sub-Acquirer, matters relating to Authorizations or
                    this Agreement
                    and will disclose the same only to those of its staff or those of the Acquirer Group
                    Companies who require information for the purpose of processing Payment Transactions
                    or
                    otherwise carrying out the Acquirer's obligations hereunder. The Acquirer
                    shall not, and shall procure that the Acquirer's officers, employees or agents (including
                    without limitation any Processor) shall not, without the prior written consent of the Sub-
                    Acquirer, use
                    or disclose such information (howsoever obtained and in whatsoever form) to any third
                    party
                    (other than to the Acquirer Group Companies and agents for the sole purpose of
                    assisting the Acquirer to complete or enforce the Payment Transactions and Service
                    Provider's insurers and professional advisers) unless such disclosure is compelled by law,
                    regulation, stock exchange or government authority. </p>
                <p>19.3
                    The Acquirer shall use reasonable endeavours (including implementing processes) to
                    ensure Cardholder information provided to it is kept secure, shall exercise reasonable
                    care
                    when processing Payment Transactions and papers relating thereto and agrees that it will
                    not
                    process Payment Transactions and/or such papers in any manner which may facilitate
                    fraud or
                    forgery relating to a Card.</p>
                <p>19.4
                    Without prejudice to the other provisions of this Clause 19, the Acquirer shall comply
                    with any data security requirements which may be imposed or recommended by Card
                    scheme
                    rules and communicated in writing to the Acquirer by reasonable notice.</p>
                <p>19.5
                    The Bank shall keep strictly confidential all information received from the Sub-Acquirer
                    in connection
                    with the business of the Acquirer and the Acquirer Group Companies,
                    including Acquirer’s Software, agreements with Sub Merchant and any information
                    relating to any Sub Merchant obtained by the Sub-Acquirer in connection with this
                    Agreement or a
                    Payment Transaction, and will disclose the same only to those of its staff or those of the
                    Acquirer Group Companies, Visa, Mastercard who require information for the purpose
                    of processing Payment Transactions. The Bank shall not, and shall procure that the Sub-
                    Acquirer's
                    officers, employees or agents (including without limitation any Processor) shall not,
                    without
                    the prior written consent of the Acquirer, use or disclose such information (howsoever
                    obtained and in whatsoever form) to any third party (other than to the Sub-Acquirer’s
                    affiliates and
                    22
                    agents for the sole purpose of assisting the Sub-Acquirer to complete or enforce the
                    Payment
                    Transactions and the Sub-Acquirer’s insurers and professional advisers such as legal
                    counsel and
                    auditors) unless such disclosure is compelled by law, regulation, stock exchange or
                    government authority.</p>

                <h2 className="text-2xl font-bold mt-8 mb-3">20.
                    AUDIT AND INSPECTION</h2>
                <p>20.1
                    Each party shall be authorized to conduct audit checks (including attending offices or
                    other
                    premises) on the other party’s books and other records which have a connection to the
                    matters
                    which are the subject of this Agreement. Such audit may take place no more than twice a
                    year
                    and provided reasonable notice is provided. Attendance at any offices or premises where
                    book
                    or records are maintained, must be during normal office hours, i.e. Monday to Friday
                    8.30 to
                    17.00 hours and with prior arrangement.</p>
                <h2 className="text-2xl font-bold mt-8 mb-3">21.
                    EFFECTIVE DATE AND TERMINATION</h2>

                <p>21.1
                    This Agreement shall take effect from the Effective Date.</p>
                <p>21.2
                    This Agreement be terminated:</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        by the Acquirer giving to the Sub-Acquirer at least ninety (90) days' prior notice in
                        writing;
                        or

                    </li>
                    <li>
                        by the Sub-Acquirer giving to the Acquirer at least ninety (90) days’ prior notice in
                        writing,
                        without prejudice in either case to the due completion and payment in respect of all
                        Payment
                        Transactions processed and accepted by the Sub-Acquirer on or before the termination
                        date.
                    </li>

                </ol>
                <p>21.3
                    Upon termination, the Acquirer shall:</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        return to the Sub-Acquirer all related documentation;

                    </li>
                    <li>
                        present to the Sub-Acquirer all Payment Transactions completed on the date of
                        termination or
                        within 7 days of the termination;
                    </li>
                    <li>
                        to the extent it relates to usage permitted under this Agreement, remove all Card
                        scheme symbols and names in promotion materials and transaction related papers or
                        forms including from the Acquirer’s Website and demand the same removal
                        by Sub Merchants from their Websites;
                    </li>
                    <li>
                        subject to Clauses 8.4, 9.4 and 10, unless otherwise agreed by the Sub-Acquirer, in
                        respect of
                        Payment Transactions completed on the date of or within 7 days of the termination,
                        the parties’ obligations under this Agreement relating to payments and refunds in
                        respect of Payment Transactions, including the Sub-Acquirer’s right to set-off against or
                        deduct from the Settlement Account any outstanding amounts as permitted under

                        Clause 10.4, will survive for one hundred and eighty (180) days from the date of the
                        relevant Payment Transaction. Where any refund claimed by the Sub-Acquirer exceeds the
                        amount due to the Acquirer, the Sub-Acquirer shall request and the Acquirer
                        shall procure payment to the Sub-Acquirer of such net refund amount.
                    </li>

                </ol>
                <p>21.4
                    Any termination shall not affect any liabilities incurred prior to the termination nor any
                    provision expressed or intended to survive, or to be effective on, termination. In
                    particular,
                    but without prejudice to the foregoing, Clauses 9.4, 10.4, 11, 14, 18, 19 and this Clause
                    shall
                    remain in full force and effect notwithstanding termination.:</p>
                <h2 className="text-2xl font-bold mt-8 mb-3">22.  GENERAL</h2>
                <p>22.1
                    No Assignment
                    The Acquirer enters into this Agreement for the benefit of it and each of the Acquirer
                    Group Companies. All rights accruing to the Acquirer under this Agreement shall also
                    accrue to
                    the Acquirer Group Companies. The Bank acknowledges and agrees that the Acquirer’s
                    obligations may be performed by Acquirer Group Companies. Except as provided for in
                    this
                    Agreement, neither party may subcontract any obligations under this Agreement nor
                    assign, charge or
                    otherwise deal with any rights or obligations under this Agreement except to an affiliate
                    or with the
                    prior written consent of the other party:</p>
                <p>22.2
                    Entire Agreement; No Amendment
                    This Agreement contains the entire agreement and understanding between the parties
                    with respect to
                    the subject matter of this Agreement and supersedes all prior agreements and
                    understandings (whether
                    verbal or written) between the parties of such matter. No amendment or variation to this
                    Agreement
                    may be made unless made in writing and executed by the parties.</p>
                <p>
                    22.3
                    No waiver
                    No action or failure to act on the part of any party is to be regarded as a waiver of such
                    party’s rights
                    under this Agreement. Any waiver of rights must be in writing.
                </p>
                <p>
                    22.4
                    Severability
                    To the extent any part or provision of this Agreement is deemed to be illegal,
                    unenforceable or void,
                    such part or provision will be deemed to be severed from this Agreement, without
                    prejudice to the rest
                    of this Agreement which shall remain in full force and effect.
                </p>
                <p>
                    22.5
                    Notices
                    All notices may be sent by hand or courier to the last known address of a party, or by
                    email to the last
                    known email address of a party, which are as of the Effective Date:
                    Bank:
                    Address :
                    Tel. No.:
                    Email:
                    Attention :
                    Acquirer:
                    Notices are deemed to be received on the date, if by mail, such notice was dispatched or
                    if by email,
                    such notice was sent by the sender.
                </p>
                <p>
                    22.6
                    Governing Law and Arbitration
                    This Agreement is governed by the laws of the Republic of Sri Lanka.
                    Any dispute, controversy,
                    difference or claim arising out of or in relation to this Agreement must be settled
                    amicably by the
                    parties. If parties fail to resolve the Dispute amicably the Dispute may be referred by
                    either party for
                    resolution to arbitration to the exclusion of all other forums, the result of which shall be
                    final and
                    binding on the parties. Any such arbitration will be administered by the Sri Lanka
                    National Arbitration
                    Centre (“SLNAC”) under the UNCITRAL Rules then in force. The seat of the arbitration
                    will be Sri
                    Lanka and the law of this arbitration clause shall be Sri Lankan. The arbitration tribunal
                    will comprise
                    one arbitrator, who is experienced in international payments disputes, jointly selected by
                    the parties and
                    failing agreement by the parties on such joint selection, by SLNAC. The language of the
                    arbitration
                    shall be English. Any such arbitration must permit the holding of the tribunal proceeding
                    virtually by
                    video conference.
                </p>
                <p className="font-semibold">   22.7
                    Interpretation
                    In this Agreement:</p>
                <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
                    <li>
                        the singular includes the plural and vice versa;
                    </li>
                    <li>
                        a person includes any legal entity including a body corporate;
                    </li>
                    <li>
                        a party includes the party’s executors, administrators, successors, and permitted assigns;
                    </li>
                    <li>
                        a law, statute, regulation or provision of a statute or regulation (“Statutory Provision”)
                        includes all amended or re-enacted Statutory Provisions from time to time, all replacement
                        Statutory Provisions, and any other statutory instruments made or issued under that Statutory
                        Provision;
                    </li>
                    <li>
                        all payments made under this Agreement will be made in the lawful currency of Sri Lanka
                        (“LKR”) or the lawful currency of the United States of America (“USD”);
                    </li>
                    <li>
                        where a word or expression is given a particular meaning, other parts of speech and grammatical
                        forms of that word or expression have a corresponding meaning;
                    </li>
                    <li>
                        the words “include”, “including”, “for example” or “such as” are not used as, nor are they to be
                        interpreted as, words of limitation, and, when introducing an example, do not limit the meaning of
                        the words to which the example relates to that example or examples of a similar kind;
                    </li>
                    <li>
                        headings do not form part of this Agreement. However, any schedule or appendix does form part of
                        this Agreement.
                        <div className="mt-2 ml-4 text-sm text-gray-700">
                            Address: No. 12, Second Lane, Beddagana Road, Pita Kotte 10100, Sri Lanka <br />
                            Tel. No.: 076 706 5000 <br />
                            Email: admin@boswingroup.com <br />
                            Email: prasad@boswin.lk <br />
                            Attention: Dona Ranjuna
                        </div>
                    </li>
                    <li>
                        a provision of this Agreement must not be construed to the disadvantage of a party
                        merely
                        because that party prepared or drafted the Agreement; and
                    </li>
                    <li>
                        if an act must be done on a specific day which is a Saturday, Sunday or any other day
                        which is
                        a public holiday in Sri Lanka, then it must be done instead on the next day business day.
                    </li>
                </ol>
                <div className="space-y-6 text-justify">
  <h2 className="text-xl font-semibold">22.8 Counterparts and Execution</h2>

  <p>
    This Agreement may be signed in counterparts, each of which when executed and
    delivered shall be an original, but all the counterparts together shall constitute
    one and the same instrument.
  </p>

  <p>
    IN WITNESS WHEREOF the parties hereto have set their hands hereunto and to one
    other of the same tenor and date in the manner hereinafter set out:
  </p>

  {/* Signature Block */}
  <div className="mt-6 space-y-6">
    <div>
      <p className="font-semibold">Signed by</p>
      <p>....................................................</p>
      <p className="italic">(duly authorised)</p>
    </div>

    <div>
      <p className="font-semibold">Witnesses:</p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          .................................................... <br />
          (..................................)
        </li>
        <li>
          .................................................... <br />
          (..................................)
        </li>
      </ol>
    </div>

    <div>
      <p className="font-semibold">Signed by duly authorised representative of</p>
      <p>SUB-ACQUIRER on ........................, .............. at Colombo.</p>
    </div>

    <div>
      <p className="font-semibold">For and on behalf of</p>
      <p>
        BOSWIN CONSULTANCY AND INVESTMENT (PRIVATE) LIMITED on ............. ,
        .......... at Colombo.
      </p>
    </div>

    <div>
      <p className="font-semibold">Witnesses:</p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          .................................................... <br />
          (..................................)
        </li>
        <li>
          .................................................... <br />
          (..................................)
        </li>
      </ol>
    </div>
  </div>
</div>


            </div>
        </div>
    );
}

export default AcquirerAgreement;
