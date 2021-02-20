<template>
  <v-container>
    <v-row justify="center" class="my-4">
      <v-col cols="12" sm="3" md="4">
        <div class="text-center">
          <v-img class="headshot" src="headshot.png" />
        </div>
      </v-col>
      <v-col cols="12" sm="9" md="8">
        <div>
          <p style="font-size: 24px"><i>Incoming SWE Intern @ Coinbase</i></p>

          <ul class="about">
            <li>Age: 21</li>
            <li>Occuption: Software Engineering Student</li>
            <li>Location: Toronto, Canada</li>
            <li>Interests: hiking, cycling, camping, programming, politics</li>
            <li>Favourite programming lanugage: Golang</li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-4">
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
          Held positions in my school community such as President of the
          Engineering Student Union and the Chair of Orientation Week (York has
          the longest orientation in Canada at 9 full days)
        </li>
        <li>
          Engaged in the local tech community- engaged within the Golang Toronto
          (especially pre-covid)
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
    </v-row>
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
  font-size: 20pt;
  font-style: bold;
}

.bullets > li {
  font-size: 16pt;
}
</style>