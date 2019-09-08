Vue.component('mainTab',{
    data: function () {
        return {
            periods: ["2019.01", "2019.02", "2019.03"],
            tableData: [
                {
                    name: 'ООО "Ромашка"',
                    id: '000111',
                    data: [
                        {
                            period: "2019.01",
                            debtStart: 2000.00,
                            plan: 1000.00,
                            payment: 500.00,
                            zachet: 250.00,
                            invoice: 1000.00,
                        },
                        {
                            period: "2019.02",
                            debtStart: 2300.00,
                            plan: 2000.00,
                            payment: 100.00,
                            zachet: 0.00,
                            invoice: 1500.00,
                        },
                        {
                            period: "2019.03",
                            debtStart: 4000.00,
                            plan: 1500.00,
                            payment: 700.00,
                            zachet: 0.00,
                            invoice: 3000.00,
                        },
                    ]
                },
                {
                    name: 'ООО "Звёздочка"',
                    id: '000131',
                    data: [
                        {
                            period: "2019.01",
                            debtStart: 2000.00,
                            plan: 1000.00,
                            payment: 500.00,
                            zachet: 250.00,
                            invoice: 1000.00,
                        },
                        {
                            period: "2019.02",
                            debtStart: 2300.00,
                            plan: 2000.00,
                            payment: 100.00,
                            zachet: 0.00,
                            invoice: 1500.00,
                        },
                        {
                            period: "2019.03",
                            debtStart: 4000.00,
                            plan: 1500.00,
                            payment: 700.00,
                            zachet: 0.00,
                            invoice: 3000.00,
                        },
                    ]
                },
                {
                    name: 'ООО "Канделябр"',
                    id: '204111',
                    data: [
                        {
                            period: "2019.01",
                            debtStart: 2000.00,
                            plan: 1000.00,
                            payment: 500.00,
                            zachet: 250.00,
                            invoice: 1000.00,
                        },
                        {
                            period: "2019.02",
                            debtStart: 2300.00,
                            plan: 2000.00,
                            payment: 100.00,
                            zachet: 0.00,
                            invoice: 1500.00,
                        },
                        {
                            period: "2019.03",
                            debtStart: 4000.00,
                            plan: 1500.00,
                            payment: 700.00,
                            zachet: 0.00,
                            invoice: 3000.00,
                        },
                    ]
                }
            ],
        }
    },
    template: `<div class="main-table-container">
                   <div class="flex-container">
                        <div v-for="(period, index) of periods">
                            <div v-if="index == 0"
                                 class="grid-title-container-1">
                                 <div class="title-row-name">Статья/Контрагент</div>
                                <div class="title-row-period">{{period}}</div>
                                <div class="title-row-data">Сальдо н.п.</div>
                                <div class="title-row-data">План</div>
                                <div class="title-row-data">Оплачено</div>
                                <div class="title-row-data">Зачтено</div>
                                <div class="title-row-data">Отклонение<br>от плана</div>
                                <div class="title-row-data">Задолжен-<br>ность</div>
                                <div class="title-row-data">Начислено</div>
                                <div class="title-row-data">Сальдо к.п.</div>
                            </div>
                            <div v-else class="grid-title-container-2">
                                 <div class="title-row-name-empty"></div>
                                <div class="title-row-period">{{period}}</div>
                                <div class="title-row-data">Сальдо н.п.</div>
                                <div class="title-row-data">План</div>
                                <div class="title-row-data">Оплачено</div>
                                <div class="title-row-data">Зачтено</div>
                                <div class="title-row-data">Отклонение<br>от плана</div>
                                <div class="title-row-data">Задолжен-<br>ность</div>
                                <div class="title-row-data">Начислено</div>
                                <div class="title-row-data">Сальдо к.п.</div>
                            </div>
                        </div>
                   </div>
                    <div v-for="(org, index) of tableData"
                        :key="index"
                        class="flex-container">
                        <span><div class="data-row-name">{{org.name}}</div></span>
                        <div v-for="(orgData, index) of org.data"
                            :key="index"
                            class="flex-container">                                                   
                            <div class="data-row-data">{{orgData.debtStart}}</div>
                            <div class="data-row-data">{{orgData.plan}}</div>
                            <div class="data-row-data">{{orgData.payment}}</div>
                            <div class="data-row-data">{{orgData.zachet}}</div>
                            <div class="data-row-data">{{orgData.plan - orgData.payment - orgData.zachet}}</div>
                            <div class="data-row-data">{{orgData.debtStart - orgData.payment - orgData.zachet}}</div>
                            <div class="data-row-data">{{orgData.invoice}}</div>
                            <div class="data-row-data">{{orgData.debtStart - orgData.payment - orgData.zachet + orgData.invoice}}</div>
                        </div>
                    </div>
 
<!--                    <div class="main-tab">-->
<!--                            <table border="1">-->
<!--                                <tr class="title-row">-->
<!--                                    <th rowspan="2">Статья/Контрагент</th>-->
<!--                                    <span></span>-->
<!--                                    <th v-for="(period, index) of periods"-->
<!--                                        :key="index"-->
<!--                                        colspan="8">-->
<!--                                        {{period}}-->
<!--                                    </th>-->
<!--                                </tr>-->
<!--                                <tr v-for="n of periods.length"-->
<!--                                        class="title-row">-->
<!--                                    <th>Сальдо н.п.</th>-->
<!--                                    <th>План</th>-->
<!--                                    <th>Оплачено</th>-->
<!--                                    <th>Зачтено</th>-->
<!--                                    <th>Откл. от плана</th>-->
<!--                                    <th>Задолженность</th>-->
<!--                                    <th>Начислено</th>-->
<!--                                    <th>Сальдо к.п.</th>-->
<!--                                </tr>-->
<!--                                <tr class="data-row">-->
<!--                                    <td class="td-first">{{org.name}}</td>-->
<!--                                    <td class="td-data">{{org.debtStart}}</td>-->
<!--                                    <td class="td-data">{{org.plan}}</td>-->
<!--                                    <td class="td-data">{{org.payment}}</td>-->
<!--                                    <td class="td-data">{{org.zachet}}</td>-->
<!--                                    <td class="td-data">{{org.plan - org.payment - org.zachet}}</td>-->
<!--                                    <td class="td-data">{{org.debtStart - org.payment - org.zachet}}</td>-->
<!--                                    <td class="td-data">{{org.invoice}}</td>-->
<!--                                    <td class="td-data">{{org.debtStart - org.payment - org.zachet + org.invoice}}</td>-->
<!--                                </tr>-->
<!--                            </table>-->
<!--                        </div>-->
                    </div>`
})