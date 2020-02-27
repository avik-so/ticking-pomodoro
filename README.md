All unfinished [users stories](https://github.com/avik-so/ticking-pomodoro/blob/e86f149cace7e46e8a469c91a3146aa44923a64f/pomodoro.test.ts#L3) for this project are kept at the top of the `pomodoro.test.ts` file in the comments.
If you wish to move these to issues feel free.  


Project uses the [TCR](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864) technique as described by Kent beck with one small change.  
There are two scripts:  
`npm run red` this is to be run when you expect tests to fail, during phase 1 of the [TDD cycle.](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)  
`npm run green` this is to be run when you expect tests to pass. During phase 2 and 3 of the TDD cycle.  
