
# Type-Czech-Canonical

This is a barebones example of [Type-Czech](https://github.com/steenhansen/type-czech#fast-start) JavaScript runtime type checking with React SSR on NodeJs.


This example is live on Render.com as a slow free hosted site that takes 80-180 seconds to start [https://type-czech-canonical.onrender.com/](https://type-czech-canonical.onrender.com/). 
It exists to show how easy it is to add runtime type checking to an SSR Javascript project. 
The live version has TypeCzech turned on, with an illustrative type error in a JSX component erroring to both NodeJs and the browser.
The initial counter is an erroneous string of "1" instead of the correct number of 1, which causes the incorrect output of "Counter 111111..."
when the counter button is pressed, instead of the wanted 'Counter 1', 'Counter 2' ...

This sample project is based on the [Vite-Plugin-SSR](https://vite-plugin-ssr.com/).

## To install
  - npm install

## Run type-czech-canonical
To run the program with TypeCzech on, logging errors, with a large developer Type-Czech file
  - npm run dev
  - http://localhost:3000/

To run the program with TypeCzech off, ignoring errors, with a tiny production Type-Czech file
  - npm run prod
  - http://localhost:3000/







## Type Error Messages When TypeCzech Turned On

### Node.js Runtime Type Error
```
MESSAGE Property 'init_count' is indicated to be a 'number', but is inaccurately a 'string' : 1
        Node.js : PRE_CounterInc :{ init_count: 'number' }
        CHECKER check_assert()
    ACTUAL TYPE 'string'
         VALUES ""
         ORIGIN
```

### Broswer Runtime Type Error in Console
```
PRE_JSX_Counter() PRE-FUNC: Property 'init_count' is indicated to be a 'number', 
                            but is inaccurately a 'string' : 1
            CHECKER checkParam_typeExtra()
        ACTUAL TYPE ['object','object']
             VALUES {init_count:"1"},{}
      EXPECTED TYPE [{"init_count":"number"},"object"]
             ORIGIN Counter(Counter_props, _react_obj_1, _react_obj_2)
```

## Free Hosting on render.com
	Web Service
	
	Settings
		Build Command	$ yarn; yarn build-prod
		Start Command	$ node ./server-dev