<template>
  <div
    aria-hidden="true"
    class="w-64 rounded-xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-purple-950/40 backdrop-blur-xl sm:w-72"
  >
    <div class="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
      <span class="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
      <span class="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      <span class="ml-2 text-[11px] text-white/40">developer.js</span>
    </div>

    <div
      class="space-y-1.5 p-4 font-mono text-[11px] leading-relaxed sm:text-xs"
    >
      <p>
        <span class="text-purple-400">const</span>
        <span class="text-blue-300"> developer</span>
        <span class="text-white/50"> = </span>
        <span class="text-white/50">{</span>
      </p>

      <p class="pl-4">
        <span class="text-blue-200">name:</span>
        <span class="text-green-300"> 'Mohamed Bendary'</span>,
      </p>

      <p class="pl-4">
        <span class="text-blue-200">role:</span>
        <span class="text-green-300"> 'Software Engineer'</span>,
      </p>

      <p class="pl-4">
        <span class="text-blue-200">stack:</span>
        <span class="text-white/50"> [</span>
        <span class="text-green-300">'Vue.js'</span>,
        <span class="text-green-300"> 'Django'</span>,
        <span class="text-green-300"> 'REST APIs'</span>
        <span class="text-white/50">]</span>,
      </p>

      <p class="pl-4">
        <span class="text-blue-200">focus:</span>
        <span class="text-green-300"> 'Full-Stack Development'</span>,
      </p>

      <p>
        <span class="text-white/50">};</span>
      </p>
    </div>
  </div>
</template>