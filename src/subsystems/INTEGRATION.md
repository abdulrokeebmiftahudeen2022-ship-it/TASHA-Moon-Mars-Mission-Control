
# TASHA Subsystem Integration Guide

This folder contains the six independent subsystems of TASHA.

## 1. Environment Subsystem
Folder: environment/

Purpose:
Provides information about the Moon and Mars, including their environmental conditions, temperatures and hazards.

## 2. Resource Management Subsystem
Folder: resources/

Purpose:
Monitors and manages mission resources such as oxygen, water, power and crew health.

## 3. Mission Simulation Subsystem
Folder: mission/

Purpose:
Provides mission events, decision options and the consequences of player decisions.

## 4. Learning and Science Subsystem
Folder: learning/

Purpose:
Provides scientific facts, explanations and educational lessons.

## 5. IoT Monitoring Subsystem
Folder: iot/

Purpose:
Simulates sensor readings for oxygen, temperature, pressure and radiation, including alerts.

## 6. UI/UX Subsystem
Folder: ui/

Purpose:
Provides reusable interface components for the TASHA application.

## Integration Guidelines

- Each subsystem must remain independently developed.
- Use the exported functions and components when connecting subsystems.
- Use "moon" and "mars" as the environment identifiers.
- Keep business logic separate from interface components.
- All simulated readings are for educational gameplay, not real spacecraft operations.
