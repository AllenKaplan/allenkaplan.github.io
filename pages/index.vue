<template>
  <v-container>
    <v-row class="my-4">
      <v-col>
        <!-- <p style="font-size: 24px"><i>Incoming SWE Intern @ Coinbase</i></p> -->
        <h3>Hi, my name is</h3>
        <h1 style="font-size: 32pt">Allen Kaplan</h1>
        <h2 style="font-size: 24pt">Software Engineer and Tech Entrepreneur</h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-4">
      <v-col cols="12" md="9" lg="8">
        <p style="font-size: 14pt">
          I'm a 4th Year Software Engineering student at York University in
          Toronto. I have a deep passion for technology and entrepreneurship
          that grew from the startup accelerator at my school- BEST Lab, where I
          currently am working as a research assistant until April 2021. In my
          free time, I take my passion for technology to conferences,
          competitions and hackathons. I'm passionate about mentorship and
          helping pass on knowledge to peers.
        </p>
        <br />
        <ul class="about">
          <li>You'll find me in: Toronto, Canada</li>
          <li>You'll find me: hiking, cycling, camping, programming</li>
          <li>You'll find me using: Golang, Vue.js and Flutter</li>
          <li>My expertise is in: cloud infrastrcture, backend development</li>
        </ul>

        <br />

        <v-btn to="/resume" block x-large class="my-4"
          >Check out my resume</v-btn
        >
        <v-btn to="/projects" block x-large class="my-4"
          >See some of my projects</v-btn
        >
        <v-btn to="/blog" block x-large class="my-4">Read my ramblings</v-btn>
        <v-btn to="/contact" block x-large class="my-4">Contact me</v-btn>
      </v-col>
      <v-col cols="12" md="3" lg="4">
        <div class="text-center pa-4">
          <v-img class="headshot" src="headshot.png" />
        </div>
      </v-col>
    </v-row>
    <!-- <v-row justify="center" class="my-4">
      <ul class="bullets">
        <li>
          4th Year Software Engineering student in the Big Data stream enrolled
          at the Lassonde School of Engineering at York University in Toronto
        </li>
        <li>
          Passion for technological innovation, entrepreneurship and community
          involvement
        </li>
        <li>
          I have a deep passion for technology and entrepreneurship that grow
          from the incubator at my school- BEST Lab, where I currently am
          working as a research assistant studying design sprints until the end
          of April 2021
        </li>
        <li>
          In my free time, I attend many conferences, competitions and
          hackathons—one of things I miss most about in person events
        </li>
        <li>
          Between my school community and the technology community, I really
          care about mentorship and helping pass on what I know to my peers so
          they can mentor others themselves
        </li>
        <li>
          Beyond that, I also really enjoy the outdoors and I love to hike, camp
          and go cycling
        </li>
      </ul>
    </v-row> -->
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.headshot {
  border-radius: 2em;
}

.about > li {
  font-size: 16pt;
  /* font-style: bold; */
}

.bullets > li {
  font-size: 14pt;
}
</style>