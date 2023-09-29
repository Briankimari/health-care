import React from 'react'

const Consoltation = () => {
  return (
    <div className='md:p-10 p-3 mt-4'>
      <div>
        <h2 className='text-center text-2xl font-semibold dark:text-white'>BMI & Colorie Consoltation</h2>
        <p className='text-lg mt-10 text-gray-500 font-semibold text-center dark:text-white'> you are on this page because your BMI category is quite abnormal.</p>
      </div>

      {/* activity level */}
      <div className='mt-10 space-y-8'>
        <h1 className='text-2xl font-semibold  pb-3  dark:text-white'>Activity Level </h1>
        <div className='bg-white dark:bg-secondary-dark-bg dark:text-white shadow-sm p-4 text-xl rounded-lg'>
          <p className=''>
            <h1 className='text-2xl font-bold pb-3 text-orange-500'>Sedentary</h1>
             If you are mostly sedentary (little or no exercise), you need to eat fewer calories to lose weight and maintain weight.
          </p>

        </div>

        <div className='bg-white dark:bg-secondary-dark-bg dark:text-white shadow-sm p-4 text-xl rounded-lg'>
          <p className=''>
            <h1 className='text-2xl font-bold text-orange-500 pb-3'>Light Active</h1>
             If you are lightly active (exercise 1–3 times per week), you need to eat slightly fewer calories to lose weight and maintain weight.
          </p>

        </div>

          <div className='bg-white dark:bg-secondary-dark-bg dark:text-white p-4 shadow-sm text-xl rounded-lg'>
          <p className=''>
            <h1 className='text-2xl font-bold text-orange-500 pb-3'>Moderately Active</h1>
          If you are moderately active (exercise 3–5 times per week), you need to eat about the same number of calories to lose weight and maintain weight.
          </p>

        </div>

         <div className='bg-white dark:bg-secondary-dark-bg dark:text-white p-4 shadow-sm text-xl rounded-lg'>
          <p className=''>
            <h1 className='text-2xl font-bold text-orange-500 pb-3'>Very Active</h1>
             If you are very active (exercise 6–7 times per week or more), you need to eat slightly more calories to lose weight and maintain weight.
          </p>

        </div>
      </div>

      {/* advice */}
      <div className='mt-16'>
        <h1 className='text-2xl font-bold dark:text-white'>Advice</h1>
        <p className='bg-white dark:bg-secondary-dark-bg dark:text-white p-6 mt-6 space-y-8 text-xl '>
          <h4 className='text-lg font-semibold'>
            Here are some tips for adjusting your calorie intake based on your activity level and fitness goals:
          </h4>
          <p>
           If you are mostly sedentary (little or no exercise), you need to eat fewer calories to lose weight and maintain weight.
          </p>
          <p>If you are lightly active (exercise 1–3 times per week), you need to eat slightly fewer calories to lose weight and maintain weight.</p>
          <p>If you are moderately active (exercise 3–5 times per week), you need to eat about the same number of calories to lose weight and maintain weight.</p>
          <p>If you are very active (exercise 6–7 times per week or more), you need to eat slightly more calories to lose weight and maintain weight.</p>
          <p>You can also adjust your calorie intake based on your fitness goals. If you are trying to lose weight, you need to eat fewer calories than you burn. If you are trying to gain weight, you need to eat more calories than you burn.</p>
          <p>It is important to talk to your doctor or a registered dietitian before making any major changes to your diet. They can help you create a plan that is safe and effective for you.</p>
        </p>
      </div>
    </div>
  )
}

export default Consoltation
