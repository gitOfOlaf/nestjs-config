Nest Config
===
[![GitHub tag](https://img.shields.io/github/tag/bashleigh/nest-config.svg)](https://github.com/bashleigh/nest-config)  
A config component for nestJS.

## Install

```bash
yarn add @bashleigh/nest-config
```

```bash
npx add --save @bashleigh/nest-config
```

create a `.env` file and insert your configurations

```bash
touch .env && echo 'APP_TEST=true' >> .env
```

## How to use

### Get

Get a parameter from the config

```typescript
const test = this.config.get('APP_TEST');
```
With a default option

```typescript
const test = this.config.get('APP_TEST', false);
```

### Has

Check your config has a parameter defined

```typescript
this.config.has('APP_TEST');
```

### Root

Get a root path like `/var/www/mypath`

```typescript
this.config.root('mypath'); //returns /var/www/mypath/
```
### Src 

Get a path within src (uses root)

```typescript
this.config.src('mypath'); //returns /var/www/src/mypath/
```

## Integrating with modules

```typescript
import {
    Injectable,
} from '@nestjs/common';

import ConfigModule from '@bashleigh/nest-config';

@Injectable({
  imports: [
      ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {
  constructor() {}
}

```

### Injection

Inject the component into a controller 

```typescript

import {
    Controller,
} from '@nestjs/common';

import {
    ConfigService,
} from '@bashleigh/nest-config';

@Controller('user')
export default class UserController {
    constructor(private readonly config: ConfigService) {}
    
}

```

### Injection with decorator 

```typescript 
import {
    Controller,
} from '@nestjs/common';
import {
    InjectConfig,
} from '@bashleigh/nest-config';

@Controller('user')
export default class UserController {
    constructor(@InjectConfig() private readonly config) {}
}
```

Built by <a href="http://ashleighsimonelli.co.uk/"><img src="http://www.ashleighsimonelli.co.uk/images/favicon.ico" title="Ashleigh Simonelli" alt="AS"/></a>
