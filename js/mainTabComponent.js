Vue.component('mainTab',{
    data: function () {
        return {
            periods: ["2019.01", "2019.02", "2019.03", "Всего"],
            tableData: [
                {
                    name: 'ООО "Ромашка"',
                    id: '000111',
                    data: [
                        {
                            period: "2019.01",
                            saldoStart: 2000.00,
                            plan: 1000.00,
                            payment: 500.00,
                            zachet: 250.00,
                            invoice: 1000.00,
                        },
                        {
                            period: "2019.02",
                            saldoStart: 2300.00,
                            plan: 2000.00,
                            payment: 100.00,
                            zachet: 0.00,
                            invoice: 1500.00,
                        },
                        {
                            period: "2019.03",
                            saldoStart: 4000.00,
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
                            saldoStart: 2000.00,
                            plan: 1000.00,
                            payment: 500.00,
                            zachet: 250.00,
                            invoice: 1000.00,
                        },
                        {
                            period: "2019.02",
                            saldoStart: 2300.00,
                            plan: 2000.00,
                            payment: 100.00,
                            zachet: 0.00,
                            invoice: 1500.00,
                        },
                        {
                            period: "2019.03",
                            saldoStart: 4000.00,
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
                            saldoStart: 2000.00,
                            plan: 1000.00,
                            payment: 500.00,
                            zachet: 250.00,
                            invoice: 1000.00,
                        },
                        {
                            period: "2019.02",
                            saldoStart: 2300.00,
                            plan: 2000.00,
                            payment: 100.00,
                            zachet: 0.00,
                            invoice: 1500.00,
                        },
                        {
                            period: "2019.03",
                            saldoStart: 4000.00,
                            plan: 1500.00,
                            payment: 700.00,
                            zachet: 0.00,
                            invoice: 3000.00,
                        },
                    ]
                },
            ],
            tableVals: [],
        }
    },
    methods: {
        getTableVals() {
            let deviation = 0;
            let debt = 0;
            let saldoStart = 0;
            let saldoEnd = 0;
            for (let i=0; i<this.tableData.length; i++) {
                this.tableVals.push([this.tableData[i].name]);
                let saldoStartTotalSum = 0;
                let planTotalSum = 0;
                let paymentTotalSum = 0;
                let zachetTotalSum = 0;
                let deviationTotalSum = 0;
                let debtTotalSum = 0;
                let invoiceTotalSum = 0;
                // let saldoEndTotalSum = 0;
                for (let j=0; j<this.tableData[i].data.length; j++) {
                    if (j === 0) {
                        saldoStartTotalSum = saldoStart;
                        saldoStart = this.tableData[i].data[j].saldoStart;
                        this.tableVals[i].push(saldoStart);
                        saldoStartTotalSum = saldoStart;
                    } else {
                        saldoStart = this.tableVals[i][this.tableVals[i].length-1];
                    }
                    this.tableVals[i].push(this.tableData[i].data[j].plan);
                    planTotalSum += this.tableData[i].data[j].plan;

                    this.tableVals[i].push(this.tableData[i].data[j].payment);
                    paymentTotalSum += this.tableData[i].data[j].payment;

                    this.tableVals[i].push(this.tableData[i].data[j].zachet);
                    zachetTotalSum += this.tableData[i].data[j].zachet;

                    deviation = this.tableData[i].data[j].plan - this.tableData[i].data[j].payment - this.tableData[i].data[j].zachet;
                    this.tableVals[i].push(deviation);
                    deviationTotalSum += deviation;

                    debt = saldoStart - this.tableData[i].data[j].payment - this.tableData[i].data[j].zachet;
                    this.tableVals[i].push(debt);
                    debtTotalSum += debt;

                    this.tableVals[i].push(this.tableData[i].data[j].invoice);
                    invoiceTotalSum += this.tableData[i].data[j].invoice;

                    saldoEnd = debt + this.tableData[i].data[j].invoice;
                    this.tableVals[i].push(saldoEnd);
                }
                //соберём итоговый столбец
                this.tableVals[i].push(saldoStartTotalSum);
                this.tableVals[i].push(planTotalSum);
                this.tableVals[i].push(paymentTotalSum);
                this.tableVals[i].push(zachetTotalSum);
                this.tableVals[i].push(deviationTotalSum);
                this.tableVals[i].push(debtTotalSum);
                this.tableVals[i].push(invoiceTotalSum);
                this.tableVals[i].push(saldoEnd);
            }
            //Соберём итоговую строку
            let arrTotal = ['Итого'];
            for (let j=1; j < this.tableVals[0].length; j++) {
                totalSum = 0;
                for (let i=0; i < this.tableVals.length; i++) {
                    totalSum += this.tableVals[i][j];
                }
                arrTotal.push(totalSum);
            }
            // console.log(arrTotal);
            this.tableVals.push(arrTotal);
        }
    },
    created: function () {
        this.getTableVals();
    },
    filters: {
        getFinData: function (x) {
            return (parseFloat(x))? x.toFixed(2) : x;
        }
    },
    template: `<div class="main-table-container">
                    <div class="flex-container-row">
                       <span><div class="title-row-name">Статья/Контрагент</div></span>
                       <div v-for="(period, index) of periods" class="flex-container-row">
                            <div class="title-row-saldo">Сальдо н.п.</div>
<!--                            <div class="grid-title-container">-->
                            <div class="flex-container-column">
                                <div class="title-row-period">{{period}}</div>
                                <div class="flex-container-row">
                                    <div class="title-row-data">План</div>
                                    <div class="title-row-data">Оплачено</div>
                                    <div class="title-row-data">Зачтено</div>
                                    <div class="title-row-data">Отклонение<br>от плана</div>
                                    <div class="title-row-data">Задолжен-<br>ность</div>
                                    <div class="title-row-data">Начислено</div>
                                </div>
                            </div>
                            <div v-if="index === (periods.length - 2)" class="title-row-saldo">Сальдо к.п.</div>                            
                       </div>
                       <span><div class="title-row-saldo">Сальдо к.п.</div></span>
                    </div>
                    <div v-for="(org, i) of tableVals"
                        :key="i"
                        class="flex-container-row">
                        <div v-for="(orgData, j) of org"
                            :key="j"
                            class="">                                                   
                            <div v-if="j === 0" class="data-row-name">{{orgData}}</div>
                            <div v-else class="data-row-data">{{orgData | getFinData}}</div>
                        </div>
                    </div>
                </div>`
})