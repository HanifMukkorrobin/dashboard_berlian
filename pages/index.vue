<template>
  <div class="p-6 h-[100vh]">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-4 bg-E7ECE7 p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-2B7FBC text-sm">
              Transfer FG
            </div>
            <div class="text-2B7FBC text-lg font-semibold">
              {{formattedNumber(item.transferFg)}} <span class="text-sm font-normal">Pairs</span>
            </div>
          </div>
          <div class="flex items-center justify-center bg-B7D38D text-lg font-medium text-3DB57B h-[60px] w-[60px] rounded-md">
            100%
          </div>
        </div>
      </div>
      <div class="col-span-4 bg-E7ECE7 p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-2B7FBC text-sm">
              FG INV LEVEL
            </div>
            <div class="text-2B7FBC text-lg font-semibold">
              {{formattedNumber(item.fgInvLevel)}} <span class="text-sm font-normal">Pairs</span>
            </div>
          </div>
          <div class="flex items-center justify-center bg-B7D38D text-lg font-medium text-3DB57B h-[60px] w-[60px] rounded-md">
            69%
          </div>
        </div>
      </div>
      <div class="col-span-4 bg-E7ECE7 p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-2B7FBC text-sm">
              ABSENTEEISM RATE
            </div>
            <div class="text-2B7FBC text-lg font-semibold">
              {{formattedNumber(item.absenteeismRate)}} <span class="text-sm font-normal">People</span>
            </div>
          </div>
          <div class="flex items-center justify-center bg-B7D38D text-lg font-medium text-3DB57B h-[60px] w-[60px] rounded-md">
            69%
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-8">
        <div class="p-4">
          <div class="text-2B7FBC text-center text-2xl font-medium">
            OUTPUT ACHIEVEMENT (%)
          </div>
          <highcharts :options="chartOptions" />
        </div>
      </div>
      <div class="col-span-4">
        <div class="p-4">
          <div class="text-2B7FBC text-center text-2xl font-medium">
            INPUT READINESS
          </div>
          <div class="grid grid-cols-12 gap-4 mt-4">
            <div class="col-span-4 h-[50px] rounded-md flex items-center justify-center bg-B7D38D text-center">
              Input <br/>
              Stiching P1
            </div>
            <div class="col-span-4 h-[50px] rounded-md flex items-center justify-center bg-B0C9DA text-center">
              Input <br/>
              Stiching P2
            </div>
            <div class="col-span-4 h-[50px] rounded-md flex items-center justify-center bg-726B6B text-center">
              Outsole
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4 mt-2">
            <div class="col-span-4 h-[50px] text-4xl font-semibold rounded-md flex items-center justify-center text-B7D38D text-center">
              100%
            </div>
            <div class="col-span-4 h-[50px] text-4xl font-semibold rounded-md flex items-center justify-center text-B0C9DA text-center">
              100%
            </div>
            <div class="col-span-4 h-[50px] text-4xl font-semibold rounded-md flex items-center justify-center text-726B6B text-center">
              100%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="text-2B7FBC text-center text-2xl font-medium mt-3">
        SHIPMENT READINESS
      </div>
      <div class="mt-4">
        <table style="width: 100%;">
          <thead>
            <tr>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);"></th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">12/25</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">12/26</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">12/27</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">12/28</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">12/29</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">12/30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class=" h-10 border-8 border-FFFFFF text-2B7FBC">Readiness</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B7D38D text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B0C9DA text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-ECCC66 text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-726B6B text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">100%</td>
            </tr>
            <tr>
              <td class=" h-10 border-8 border-FFFFFF text-2B7FBC">Balance</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B7D38D text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B0C9DA text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-ECCC66 text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-726B6B text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">XXX PRS</td>
            </tr>
          </tbody>
        </table>
        <table style="width: 100%;" class="mt-4">
          <thead>
            <tr>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);"></th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">1/1</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">1/2</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">1/3</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">1/4</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">1/5</th>
              <th class="font-medium text-sm" style="width: calc(100vh / 8);">1/6</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class=" h-10 border-8 border-FFFFFF text-2B7FBC">Readiness</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B7D38D text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B0C9DA text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-ECCC66 text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-726B6B text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">100%</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">100%</td>
            </tr>
            <tr>
              <td class=" h-10 border-8 border-FFFFFF text-2B7FBC">Balance</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B7D38D text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-B0C9DA text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-ECCC66 text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-726B6B text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">XXX PRS</td>
              <td class=" h-10 border-8 border-FFFFFF text-FFFFFF bg-8495A8 text-center">XXX PRS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'IndexPage',
  methods: {
    formattedNumber(number) {
      const angka = parseInt(number)
      return new Intl.NumberFormat('id-ID').format(angka)
    }
  },
  computed: {
    ...mapGetters({
      item: 'getData'
    }),
    chartOptions() {
      const options = {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: ['P1', 'P2', 'IP', 'Rubber', 'Stockfit'],
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total fruit consumption',
            enabled: false
          }
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            colorByPoint: true, // Enable color by point
            colors: ['#B7D38D', '#B0C9DA', '#ECCC66', '#726B6B', '#8495A8'], // Specify colors for each bar
            labels: {
              enabled: false
            },
          }
        },
        series: [
          {
            data: [parseInt(this.item.p1), parseInt(this.item.p1), parseInt(this.item.ip), parseInt(this.item.rubber), parseInt(this.item.stockfit)]
          }
        ]
      }
      return options
    }
  }
}
</script>
