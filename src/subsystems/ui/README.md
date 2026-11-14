# TASHA UI Subsystem

Reusable React components for the TASHA Mission Control interface.

## Components

### DashboardHeader
Props:
- mission: string

### StatusCard
Props:
- title: string
- value: number
- unit: string
- status: "normal" | "warning" | "critical"

### AlertPanel
Props:
- alerts: array of alert objects

Each alert can contain:
- name
- sensor or resource
- message
- status
- value

### MissionSelector
Props:
- selectedMission: "moon" | "mars"
- onSelect: function

## Importing components

Import from the subsystem index:

import {
  DashboardHeader,
  StatusCard,
  AlertPanel,
  MissionSelector
} from "./subsystems/ui";

## Integration note

This subsystem is independent. It does not manage mission logic,
sensor readings, resource calculations, or application state.
Those responsibilities belong to their respective subsystems.