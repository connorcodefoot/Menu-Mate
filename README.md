<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->
<!-- PROJECT LOGO -->
<br />
<div align="center">

![mm](https://github.com/connorcodefoot/Menu-Mate/blob/master/src/MMLogo.gif)
  <p align="center">
Menu Mate is an MVP for an all in one POS for restaurants. Managers can create and update menus and manage orders, all while customers can create, submit and pay for orders from their mobile device.  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Installation</a>
    <li>
      <a href="#installation">Getting Started</a></li>
    <ol>
      <li>
        <a href="#stripe">Stripe Credentials</a>
      </li>
    </ol>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is in progress. Using an instant messaging model, MyTeam enables a non-technical user to create bots and agents that can perform specific tasks. Users can create teammates with different personas and converse accordingly. Behind the scenes, the new teammate is created using ChatGPT specific to the parameters the user inputs, while the conversation history is fed back into the model, further developing the persona and ensuring context is maintained indefinitely. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

Postgres, Express, Node, React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Installation

1. Ensure that you have also cloned MenuMate API (https://github.com/connorcodefoot/Menu-Mate-API)
2. Create and connect local postgres DB, setting up .env file accordingly
3. Run ```npm run db:reset``` to seed app
4. Run API then run app
  
## Getting Started

1. Create a new user, proceed to men
2. Add items to your order, submit items to kitchen. Note that orders are ongoing until they are paid, so feel free to continue to add to the order if you feel like another drink or dessert.
3. See stripe details below for test card credentials.
4. For admin views, go to /admin/orders, from there, browse orders or add/edit menus

### Stripe

- Use stripe test credentials to submit payments
``` 
    Card: 4242424242424242
    Expiry: any date greater than today
    CSV: any 3 digits
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Add option to create new personas
- [ ] Integrate supabase
- [ ] Cleanup UI
- [ ] Add users table to DB
- [ ] Add auth
- [ ] Lite deploy to friends and fam


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Connor Broadfoot- [twitter](https://twitter.com/brocollihotdog) - cgbroadfoot@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[mm]:(https://github.com/connorcodefoot/Menu-Mate/blob/master/src/MMLogo.gif)
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 











## Future Builds

- Kitchen view of orders optimized for people preparing food
- Alternative customer flow for takeout orders
- QR code scanning for table
- Reporting
- Deeper tools for orders view
- Refactoring. Three of us worked quite independentally on this project - it could use some consistency/trimming










