// localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstName": "Rajesh",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Complete project report",
        "description": "Prepare and submit the final project report for review.",
        "date": "2024-10-20",
        "category": "Report"
      },
      {
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false,
        "title": "Client meeting",
        "description": "Discuss the new project requirements with the client.",
        "date": "2024-10-22",
        "category": "Meeting"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "title": "Update project plan",
        "description": "Revise the project plan based on new inputs.",
        "date": "2024-10-15",
        "category": "Planning"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newtask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Anjali",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "title": "Send invoice to client",
        "description": "Create and send the invoice for services rendered.",
        "date": "2024-10-10",
        "category": "Billing"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Research new market trends",
        "description": "Analyze and report on the latest trends in the market.",
        "date": "2024-10-20",
        "category": "Research"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare training material",
        "description": "Develop training materials for new hires.",
        "date": "2024-10-23",
        "category": "Training"
      },
      {
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true,
        "title": "Submit budget plan",
        "description": "Create and submit the budget plan for approval.",
        "date": "2024-10-12",
        "category": "Finance"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newtask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Suresh",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Update company website",
        "description": "Implement new design changes to the company website.",
        "date": "2024-10-21",
        "category": "Development"
      },
      {
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false,
        "title": "Code review",
        "description": "Review code from the latest project submissions.",
        "date": "2024-10-22",
        "category": "Development"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "title": "Fix website bugs",
        "description": "Resolve bugs reported by the QA team.",
        "date": "2024-10-18",
        "category": "Development"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare demo for client",
        "description": "Create a demo of the latest software release for the client.",
        "date": "2024-10-25",
        "category": "Presentation"
      }
    ],
    "taskCounts": {
      "active": 3,
      "newtask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Pooja",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "title": "Write documentation",
        "description": "Complete the product documentation for the latest release.",
        "date": "2024-10-16",
        "category": "Documentation"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Set up new server",
        "description": "Configure and deploy the new server for the project.",
        "date": "2024-10-22",
        "category": "Infrastructure"
      },
      {
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false,
        "title": "Conduct team meeting",
        "description": "Organize and lead the team meeting on project progress.",
        "date": "2024-10-24",
        "category": "Meeting"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newtask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Vikas",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Design marketing materials",
        "description": "Create designs for the upcoming marketing campaign.",
        "date": "2024-10-20",
        "category": "Marketing"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Social media strategy",
        "description": "Develop a social media strategy for the next quarter.",
        "date": "2024-10-22",
        "category": "Marketing"
      },
      {
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "title": "Create promotional video",
        "description": "Film and edit a promotional video for the new product line.",
        "date": "2024-10-14",
        "category": "Media"
      },
      {
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare sales pitch",
        "description": "Develop a sales pitch for the new product.",
        "date": "2024-10-23",
        "category": "Sales"
      },
      {
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true,
        "title": "Deliver final product",
        "description": "Send the final product to the client after testing.",
        "date": "2024-10-18",
        "category": "Logistics"
      }
    ],
    "taskCounts": {
      "active": 3,
      "newtask": 2,
      "completed": 1,
      "failed": 1
    }
  }
];

  
  const admin = [{
    "id": 1,
    "firstName": "Admin Saab",
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin }; // Ensure these are initialized and returned properly
};