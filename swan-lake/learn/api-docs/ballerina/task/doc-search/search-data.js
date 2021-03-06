var searchData = {
  "modules": [
    {
      "id": "task",
      "description": "\u003cp\u003eThis module provides the functionality to configure and manage Task Listeners and Task Schedulers.\u003c/p\u003e",
      "orgName": "ballerina",
      "version": "1.1.4"
    }
  ],
  "classes": [
    {
      "id": "Scheduler",
      "description": "\u003cp\u003eRepresents a ballerina task Scheduler, which can be used to run jobs periodically, using the given configurations.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    }
  ],
  "functions": [],
  "records": [
    {
      "id": "TimerConfiguration",
      "description": "\u003cp\u003eConfigurations related to a timer, which are used to define the behavior of a timer when initializing the\n\u003ccode\u003etask:Listener\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "AppointmentConfiguration",
      "description": "\u003cp\u003eConfigurations related to an appointment, which are used to define the behavior of an appointment when initializing\nthe \u003ccode\u003etask:Listener\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    }
  ],
  "constants": [
    {
      "id": "SMART_POLICY",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003esmartPolicy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "DO_NOTHING",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003edoNothing\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "FIRE_AND_PROCEED",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003efireAndProceed\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "FIRE_NEXT_WITH_EXISTING_COUNT",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003efireNextWithExistingCount\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "FIRE_NEXT_WITH_REMAINING_COUNT",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003efireNextWithRemainingCount\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "FIRE_NOW_WITH_EXISTING_COUNT",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003efireNowWithExistingCount\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "FIRE_NOW_WITH_REMAINING_COUNT",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003efireNowWithRemainingCount\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "FIRE_NOW",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003efireNow\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "IGNORE_POLICY",
      "description": "\u003cp\u003eThe value of this constant is \u003ccode\u003eignorePolicy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    }
  ],
  "errors": [
    {
      "id": "SchedulerError",
      "description": "\u003cp\u003eError type specific to the \u003ccode\u003etask:Scheduler\u003c/code\u003e object functions.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "ListenerError",
      "description": "\u003cp\u003eError type specific to the \u003ccode\u003etask:Listener\u003c/code\u003e object functions.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    }
  ],
  "types": [
    {
      "id": "Error",
      "description": "\u003cp\u003eRepresents the Union error type of the ballerina/task module.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "TimerMisfirePolicy",
      "description": "\u003cp\u003ePossible types of parameters that can be passed into the \u003ccode\u003eTimerTaskPolicy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "AppointmentMisfirePolicy",
      "description": "\u003cp\u003ePossible types of parameters that can be passed into the \u003ccode\u003eAppointmentTaskPolicy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "RecurringTaskPolicy",
      "description": "\u003cp\u003ePossible types of parameters that can be passed into the \u003ccode\u003eRecurringTaskPolicy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    },
    {
      "id": "OneTimeTaskPolicy",
      "description": "\u003cp\u003ePossible types of parameters that can be passed into the \u003ccode\u003eOneTimeTaskPolicy\u003c/code\u003e.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    }
  ],
  "clients": [],
  "listeners": [
    {
      "id": "Listener",
      "description": "\u003cp\u003eRepresents a ballerina task listener, which can be used to schedule and execute tasks periodically.\u003c/p\u003e",
      "moduleId": "task",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.1.4"
    }
  ],
  "annotations": [],
  "abstractObjects": []
};