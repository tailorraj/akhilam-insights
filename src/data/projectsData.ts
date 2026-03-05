import type { ChartDataPoint } from '../types'

export const projectsTimeData = {
  month: {
    timeSpentByProject: [
      { name: 'SAP S/4 HANA', hours: 342 },
      { name: 'Fiori Migration', hours: 218 },
      { name: 'ERP Rollout', hours: 485 },
      { name: 'ABAP Upgrade', hours: 276 },
      { name: 'BI Analytics', hours: 193 },
      { name: 'SAP Fiori UX', hours: 154 },
    ] as ChartDataPoint[],

    timeLoggedByEmployee: [
      { name: 'Rohan Mehta', hours: 168 },
      { name: 'Priya Sharma', hours: 192 },
      { name: 'Aditya Singh', hours: 145 },
      { name: 'Kavya Nair', hours: 176 },
      { name: 'Arjun Patel', hours: 158 },
      { name: 'Deepa Rao', hours: 183 },
    ] as ChartDataPoint[],

    timeLoggedByProjectEmployee: [
      { name: 'SAP S/4 HANA', rohan: 85, priya: 72, aditya: 48, kavya: 62 },
      { name: 'Fiori Migration', rohan: 42, priya: 58, aditya: 36, kavya: 28 },
      { name: 'ERP Rollout', rohan: 95, priya: 88, aditya: 42, kavya: 78 },
      { name: 'ABAP Upgrade', rohan: 62, priya: 76, aditya: 45, kavya: 38 },
      { name: 'BI Analytics', rohan: 38, priya: 44, aditya: 52, kavya: 48 },
    ] as ChartDataPoint[],
  },

  week: {
    timeSpentByProject: [
      { name: 'SAP S/4 HANA', hours: 84 },
      { name: 'Fiori Migration', hours: 52 },
      { name: 'ERP Rollout', hours: 118 },
      { name: 'ABAP Upgrade', hours: 67 },
      { name: 'BI Analytics', hours: 48 },
      { name: 'SAP Fiori UX', hours: 36 },
    ] as ChartDataPoint[],

    timeLoggedByEmployee: [
      { name: 'Rohan Mehta', hours: 42 },
      { name: 'Priya Sharma', hours: 48 },
      { name: 'Aditya Singh', hours: 35 },
      { name: 'Kavya Nair', hours: 44 },
      { name: 'Arjun Patel', hours: 38 },
      { name: 'Deepa Rao', hours: 46 },
    ] as ChartDataPoint[],

    timeLoggedByProjectEmployee: [
      { name: 'SAP S/4 HANA', rohan: 22, priya: 18, aditya: 12, kavya: 16 },
      { name: 'Fiori Migration', rohan: 10, priya: 14, aditya: 9, kavya: 7 },
      { name: 'ERP Rollout', rohan: 24, priya: 22, aditya: 10, kavya: 20 },
      { name: 'ABAP Upgrade', rohan: 15, priya: 19, aditya: 11, kavya: 9 },
      { name: 'BI Analytics', rohan: 9, priya: 11, aditya: 13, kavya: 12 },
    ] as ChartDataPoint[],
  },
}
