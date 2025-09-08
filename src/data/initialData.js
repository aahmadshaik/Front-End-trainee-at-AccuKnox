export const initialData = {
  categories: [
    {
      id: "category-1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget-1",
          name: "Cloud Security Posture",
          text: "Current security posture shows 85% compliance across all cloud resources with 3 critical issues requiring immediate attention.",
        },
        {
          id: "widget-2",
          name: "Risk Assessment Overview",
          text: "Total risk score: Medium. 12 high-priority vulnerabilities detected across infrastructure components.",
        },
      ],
    },
    {
      id: "category-2",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "widget-3",
          name: "Workload Protection Status",
          text: "All workloads are monitored. Runtime protection active on 95% of containers with real-time threat detection enabled.",
        },
      ],
    },
    {
      id: "category-3",
      name: "Registry Scan",
      widgets: [
        {
          id: "widget-4",
          name: "Image Vulnerability Scan",
          text: "Latest scan completed: 247 images scanned, 15 critical vulnerabilities found, 42 medium-risk issues identified.",
        },
        {
          id: "widget-5",
          name: "Registry Health Check",
          text: "Registry performance optimal. 99.9% uptime maintained with automated backup systems operational.",
        },
      ],
    },
  ],
};
