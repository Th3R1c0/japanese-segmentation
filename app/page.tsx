import Image from 'next/image';
import kuromoji from 'kuromoji';
export default function Home() {
  kuromoji
    .builder({ dicPath: 'path/to/dictionary/dir/' })
    .build(function (err, tokenizer) {
      // tokenizer is ready
      var path = tokenizer.tokenize('すもももももももものうち');
      console.log(path);
    });
  return <div>hello world</div>;
}
