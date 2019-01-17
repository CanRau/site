---
title: Dashbird Signup - Free AWS Lambda Monitoring Tool
description: Dashbird is a visibility and troubleshooting platform that makes sense of all parts of serverless. It covers AWS Lambda, API Gateway, AWS X-Ray and doesn't require any code changes for the use.
date: 2018-06-17T11:50:03+02:00
aliases:
    - /signup/
---

<script>
  const sig = document
    .querySelectorAll('.sign-up')

  sig.forEach(function (el) {
    el.classList.add('active')
  })

    // .classList
</script>

<section class="container-fluid dark-bg pt-5 pb-5">
    <h2 class="text-center pb-5"><span class="h4 underlined">Sign up and start improving your serverless applications today!</span></h2>
    <div class="row justify-content-md-center align-items-center">
    <div class="col-lg-6 col-md-6 col-sm-10 col-xs-12">
        <div class="pt-2">
            <form id="register-form" name="register-form" method="post" action="https://app.dashbird.io/auth/register">
                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>Email: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-8'>
                    <input type="email" class="form-control cta-input w-100-percent" placeholder='dashbird@serverless-user.com' name="email" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>First name: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-8'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Bobby' name="firstName" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>Last name: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-8'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='Drop-Tables' name="lastName" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>Company / workspace: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-8'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder="Dashbird-production" name="companyName" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>Phone number:</span>
                  </div>
                  <div class='col-md-8'>
                    <input type="text" class="form-control cta-input w-100-percent" placeholder='+1 013 123 12' name="phoneNumber">
                  </div>
                </div>
                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>Password: <span class='text-danger'>*</span></label></span>
                  </div>
                  <div class='col-md-8'>
                    <input type="password" class="form-control cta-input w-100-percent" placeholder='*******' name="password" required>
                  </div>
                </div>

                <div class="row align-items-center mb-15px">
                  <div class='col-md-4 text-center text-md-right'>
                    <span>Confirm password: <span class='text-danger'>*</span></label></span></span>
                  </div>
                  <div class='col-md-8'>
                      <input type="password" class="form-control cta-input w-100-percent" placeholder='Confirm ********' name="confirmPassword" required>
                  </div>
                    
                </div>
                <div class="input-group flex-column mt-40px"> 
                    <button type="submit" class="cta-btn cta-pink mx-auto w-50" id="register-btn">Sign up</button>
                </div>
            </form>
            <p class="text-center gray small">No credit card required</p>
        </div>
    </div>
  </div>
</section>

<script>
  fbq('track', 'ViewContent', {
    content_ids: 'register',
  });
</script>
