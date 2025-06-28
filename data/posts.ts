
import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 'critical-thinking-media-literacy',
    title: 'Critical Thinking and Media Literacy: How to Spot Fake News',
    author: 'William Merchan',
    date: 'August 15, 2024',
    imageUrl: '/fakenews.jpg',
    snippet: 'In today\'s world, we see a lot of information online. Some of it is true, but some is "fake news". Learning to see the difference is a very important skill.',
    content: [
      {
        type: 'text',
        content: 'In today\'s world, we see a lot of information online. Some of it is true, but some is "fake news". This false information is made to trick you. Learning to see the difference is a very important skill called media literacy. Here are some simple steps to help you identify fake news.'
      },
      {
        type: 'image',
        src: '/fakenuevosiglo.jpeg',
        alt: 'A person reading news on a phone and a laptop, looking thoughtful.'
      },
      {
        type: 'text',
        content: '**1. Check the Source:** Who made this information? Is it a famous news company like BBC or Reuters? Or is it a website you have never seen before? Look at the website address (URL). Sometimes, fake news sites use names that look similar to real news sites.'
      },
      {
        type: 'text',
        content: '**2. Look for Evidence:** Does the story give you facts, numbers, or quotes from experts? A good news story will tell you where its information comes from. Fake news often has no evidence. It just states opinions as if they are facts.'
      },
      {
        type: 'text',
        content: '**3. Pay Attention to Your Feelings:** Fake news often tries to make you feel very angry or very scared. When you feel strong emotions, it is harder to think clearly. If a headline makes you very emotional, take a moment to stop and think before you share it.'
      },
      {
        type: 'youtube',
        videoId: 'cSKGa_7XJkg',
        caption: 'This video from Common Sense Education explains five key ways to spot fake news.'
      },
      {
        type: 'text',
        content: '**4. Check Other News Sources:** Is anyone else reporting this story? If a big event happens, many news companies will write about it. If you can only find the story on one website, it might not be true. By being careful and asking these questions, you can avoid being tricked by fake news and help stop it from spreading.'
      }
    ]
  },
  {
    id: 'crime-and-punishment-bogota',
    title: 'Crime and Punishment: Staying Safe in Bogotá',
    author: 'William Merchan',
    date: 'August 10, 2024',
    imageUrl: '/bogota.jpg',
    snippet: 'Bogotá is a big and exciting city in Colombia. It has great food, friendly people, and beautiful places. But like any big city, it has some problems with crime. It is important to know about these dangers to stay safe.',
    content: [
      {
        type: 'text',
        content: 'Bogotá is a big and exciting city in Colombia. It has great food, friendly people, and beautiful places. But like any big city, it has some problems with crime. Knowing about the risks helps you enjoy the city without problems. Being careful is the first step to having a good time.'
      },
      {
        type: 'text',
        content: 'There are different types of theft in the city. One common type is called "cosquilleo", where thieves steal from your pockets or bag in crowded places, like on the Transmilenio bus system or busy streets. Another danger is phone snatching. Thieves on motorcycles can quickly grab your phone from your hand and drive away. It is best to avoid using your phone in public on the street.'
      },
      {
        type: 'image',
        src: '/cosquilleo.jpg',
        alt: 'Cosquilleo'
      },
      {
        type: 'text',
        content: 'To be safe, you should be extra careful in certain areas. Crowded places are popular with thieves because it is easy for them to get close to you. Be very aware of your things on public transport and in popular tourist areas like La Candelaria or the city center. At night, it is safer to stay in well-lit areas and avoid walking alone in quiet streets.'
      },
      {
        type: 'text',
        content: 'What happens when someone commits a crime? Colombia has laws and a justice system, but it can be slow. Sometimes, even when a thief is caught, the punishment is not very strong. They might go to jail for a short time or just pay a fine. Because of this, some criminals are not afraid to commit crimes again after they are released. This makes it even more important for people to protect themselves.'
      },
      {
        type: 'text',
        content: 'Living in or visiting Bogotá can be a wonderful experience. The key is to be smart and prepared. Do not show expensive things like jewelry, cameras, or a lot of cash in public. Always know where your bag and phone are. Use trusted taxi apps instead of hailing a cab on the street, especially at night. By being informed and careful, you can greatly reduce your risk and enjoy all the good things Bogotá has to offer.'
      },
      {
        type: 'image',
        src: '/thief.png',
        alt: 'Thiefs in Bogota city'
      }
    ]
  }
];
