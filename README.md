# BB_List

- A demonstration of how to use Github Actions to deploy a nodejs App to Digital Ocean.
This implemenation focuses on running your integration tests, when they pass and are merged into the main branch, github actions communicates with digital ocean via ssh, pulls the updated change into your digital ocean droplets and installs the neccessary dependencies needed to run your app. This implementation focused on using two digital ocean droplets
## Technologies
- Github Actions
- Digital Ocean Droplets
- Node JS 14.x
- PostgreSQL 11
- Bash

## Getting Started
- To get started using this repo and testing to see how this works, you will need to add the following keys into your github secrets:

- `DO_API_KEY`: This is your rsa private key generated when you initialized your droplets
- `DO_VM_1`: This is the IP address of the first digital ocean droplets.
- `DO_VM_2`: This is the IP address of the second digital ocean droplets.

### Installation

- Fork this Repo
- Set up the needed prerequisite listed above
- Trigger the github CI action in the `actions` tab on your github
- Watch the tests pass and deploy
- Login to your digital ocean droplet to see the newly deployed changes

### Background Context
- It is important to know there are three cons with this implementation:
   - You will need to manually start your server and configure NGINX as a reverse proxy by hand
   - To connect with your postgreSQL from your droplets you would need TLS and CA installed on your droplets to run migrations and queries as the managed Database on digital ocean requires encryption when communicating over the network.
   - You would need to spin a Load Balancer by hand.

### Author 
- Chinonso Amadi(Kwabena)
  



