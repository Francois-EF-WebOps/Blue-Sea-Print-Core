# KIT.md — Core Prototype Run and Verification Kit

**Status:** discovery-first. The README is generic AI Studio boilerplate; inspect the source before claiming what the core application implements.

## Read first
- `README.md`
- `package.json`, lockfile and source entry points
- tests, environment configuration and licence
- any relationship to the companion Blue-Sea-Print repository; preserve the boundary and avoid duplicating its content

## Requirements pack
Identify the core responsibility, inputs/outputs, dependency boundary, safety assumptions, failure behaviour and consumer contract. If it supplies survival-related content, validate safety claims before presenting them as executable guidance.

## Setup
README documents Node.js, `npm install`, `.env.local` with `GEMINI_API_KEY`, and `npm run dev`. Verify scripts and runtime before execution. Keep credentials out of commits and client bundles; check model/API cost and data flow.

## Procedure
1. Inspect existing implementation and companion-repository boundaries.
2. Identify public interfaces and dependencies.
3. Run documented setup and capture the environment.
4. Test ordinary, invalid and failure inputs.
5. If safety-critical outputs exist, test against authoritative requirements and block unsupported instructions.
6. Record results, known limitations and rollback.
7. Keep changes scoped to the core responsibility.

## Acceptance
- [ ] Core responsibility and interfaces are explicit.
- [ ] No duplicated canonical content is introduced.
- [ ] Positive and negative test outcomes are recorded.
- [ ] Safety-critical claims are sourced and reviewed.
- [ ] Secrets and private inputs are protected.
- [ ] Unverified behaviour is labelled.