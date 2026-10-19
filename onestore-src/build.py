src=open('/home/claude/site/index.html').read(); br=open('/home/claude/onestore/bridge.html').read()
i=src.index('<body>')+len('<body>')
open('/home/claude/carrot-guardians/onestore/index.html','w').write(src[:i]+'\n'+br+src[i:])
print('ok')
