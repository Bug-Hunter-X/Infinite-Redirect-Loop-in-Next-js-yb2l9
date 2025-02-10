# Infinite Redirect Loop in Next.js

This repository demonstrates a common but easily overlooked error in Next.js applications: an infinite redirect loop.  The issue arises from using `router.push` to navigate to the current path, creating a cycle of redirects that never resolves. 

The `bug.js` file shows the problematic code, and `bugSolution.js` provides the correct solution.

## Problem
The problem lies in this line:
`router.push('/' + router.asPath);`
This attempts to navigate to the current route, which triggers a continuous redirect and eventually crashes the application or results in poor performance. 

## Solution
The solution is to ensure you never call `router.push` or `router.replace` with the current route.  This could be avoided with better route logic and more selective routing decisions. This problem can be especially insidious in applications with complex state management.