// components/ProjectTemplate.jsx

import Navbar from '@/app/components/Navbar'

export default function ProjectTemplate() {
  return (
    <div>
        <Navbar></Navbar>

        <div className="grid grid-cols-2 gap-2 p-5 pl-20 pb-20">
            <div className="mt-40">
                <h1 className="text-[80px] leading-[100%] tracking-[0%] font-akira-expanded font-extrabold text-left mx-auto mb-8 uppercase">
                    Lung Cancer Classification
                </h1>
                <h2 className="font-akira-expanded font-bold text-[25px] leading-[100%] tracking-[0%] mb-20">
                    AI-based classification of lung cancer types from chest CT scans
                </h2>
                <p className="font-inter font-normal text-[24px] leading-[100%] tracking-[0%] leading-[32px] ">
                    Our project explores advanced deep learning techniques for lung cancer detection using medical CT scans. We focus on classifying the three main subtypes of non-small cell lung cancer—adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—by comparing the performance of Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs). Utilizing both baseline and pre-trained models, including VGG-16 and a hybrid ViT, we preprocess and augment data to enhance model accuracy. Our work highlights the strengths of each approach in medical image analysis, aiming to improve diagnostic precision and support clinical decision-making through cutting-edge AI technology.
                </p>

                <a href="https://www.kaggle.com/datasets/mohamedhanyyy/chest-ctscan-images" target="_blank" rel="noopener noreferrer">
                    <button className="mt-6 mb-10 bg-white text-black font-[800] text-[25px] leading-[100%] tracking-[0%] font-akira-expanded px-14 py-4 rounded-full w-max block text-left">
                        Dataset
                    </button>
                </a>

            </div>

            <img
                src="/projects/xray.png"
                className="w-full h-full object-cover"
                />
            <div>

            </div>
        </div>

        <div className="bg-[#2A2A2A] py-12 mt">
            <div className="flex justify-center gap-48 text-white text-[30px] font-akira-expanded font-[800] underline decoration-solid decoration-[1px] underline-offset-[2px]">
                <a href="#report" className="cursor-pointer">Report</a>
                <a href="#results" className="cursor-pointer">Results</a>
                <a href="#discussion" className="cursor-pointer">Discussion</a>
            </div>

        </div>

        <div className="px-40 py-16 mt-10">
       <section id="report">
        <h2 className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6 -mt-20">
            Report
        </h2>

        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
            Lung cancer is the leading cause of cancer-related deaths worldwide, with non-small cell lung cancer (NSCLC) making up the vast majority of cases. Accurate identification of subtypes—such as adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—is crucial for determining appropriate treatment paths. Our project explored how deep learning can assist in this process by automating subtype classification using CT scan images.
        </p>

        <h3 className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-2">
            Methodology Overview
        </h3>
        <ul className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5 space-y-3">
            <li>
            <strong>Dataset:</strong> We used 1,000 CT scan images labeled across four categories—normal, adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—split into training, validation, and test sets.
            </li>
            <li>
            <strong>Preprocessing:</strong> Images were resized, normalized, and equalized. Augmentation techniques like flipping and rotation were used on select models to enhance generalization.
            </li>
            <li>
            <strong>Model Architecture:</strong> Four main deep learning models were tested:
            <ul className="list-disc list-inside ml-5 space-y-1">
                <li><strong>Baseline CNN:</strong> A simple convolutional model trained from scratch.</li>
                <li><strong>Pretrained VGG-16 CNN:</strong> Leveraged transfer learning with and without augmentation.</li>
                <li><strong>Pretrained ViT:</strong> A Vision Transformer model evaluated across different preprocessing setups.</li>
                <li><strong>Hybrid ViT:</strong> Combined CNN-based feature extraction with transformer-based attention layers.</li>
            </ul>
            </li>
            <li>
            <strong>Evaluation:</strong> Models were assessed using overall accuracy and class-wise recall, particularly focusing on the ability to distinguish between lung cancer subtypes.
            </li>
        </ul>

        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
            This structured, method-driven approach allowed us to directly compare convolutional neural networks with transformer-based architectures in the context of lung cancer classification, highlighting both their strengths and limitations.
        </p>
        </section>



        <section id="results">
        <h2
            className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6">
                Results </h2>
        <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
            Our lung cancer classification project evaluated multiple deep learning models on a dataset of 1,000 labelled CT scans categorized into four classes: normal, adenocarcinoma, large-cell carcinoma, and squamous cell carcinoma. The dataset was split into training, validation, and test sets to ensure rigorous evaluation.
        </p>

        <h2 className='font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-2 '>
            Convolutional Neural Networks (CNN)</h2>
        <ul className='font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5 '>
            <li><strong>Baseline CNN:</strong> Achieved a test accuracy of <strong>45.4%</strong>, reflecting the challenges of capturing complex features with a shallow architecture.</li>
            <li><strong>Pretrained CNN </strong> (VGG-16 with augmentation): Improved significantly to <strong>88.5%</strong> accuracy, demonstrating the effectiveness of transfer learning combined with data augmentation techniques.</li>
        </ul>

        <h3 className='font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-2'>Vision Transformer (ViT) Models</h3>
        <ul className='font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5' >
            <li><strong>Pretrained ViT:</strong> Test accuracy ranged from <strong>33.33%</strong> to <strong>45.08%</strong>, depending on preprocessing, showing lower performance compared to CNNs likely due to dataset size limitations.</li>
            <li><strong>Hybrid ViT </strong>(combining CNN with transformer layers): Achieved up to <strong>70.16%</strong> accuracy on unprocessed images but showed reduced performance on augmented and equalized images.</li>
        </ul>

        <h3>Recall by Class for Hybrid ViT</h3>
        <table className="mb-5 w-full text-left">
        <thead>
            <tr>
            <th className="px-4 py-2 font-akira-expanded text-[18px]">Class</th>
            <th className="px-4 py-2 font-akira-expanded text-[18px]">Original Images</th>
            <th className="px-4 py-2 font-akira-expanded text-[18px]">Augmented Images</th>
            <th className="px-4 py-2 font-akira-expanded text-[18px]">Augmented + Equalized Images</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="px-4 py-2">Large-cell carcinoma</td>
            <td className="px-4 py-2">37.8%</td>
            <td className="px-4 py-2">16.7%</td>
            <td className="px-4 py-2">5.6%</td>
            </tr>
            <tr>
            <td className="px-4 py-2">Adenocarcinoma</td>
            <td className="px-4 py-2">79.2%</td>
            <td className="px-4 py-2">36.6%</td>
            <td className="px-4 py-2">95.8%</td>
            </tr>
            <tr>
            <td className="px-4 py-2">Normal</td>
            <td className="px-4 py-2">100%</td>
            <td className="px-4 py-2">100%</td>
            <td className="px-4 py-2">96.3%</td>
            </tr>
            <tr>
            <td className="px-4 py-2">Squamous cell carcinoma</td>
            <td className="px-4 py-2">74.5%</td>
            <td className="px-4 py-2">23.5%</td>
            <td className="px-4 py-2">0%</td>
            </tr>
        </tbody>
        </table>


        <h3 className='font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5'>Key Insights</h3>
        <ul className='font-akira-expanded text-[16px] leading-[100%] tracking-[0%] mb-5 space-y-3'>
            <li>CNN models, especially pretrained VGG-16, outperformed Vision Transformers due to better feature extraction on smaller datasets.</li>
            <li>Data augmentation improved CNN accuracy but negatively impacted ViT and Hybrid ViT models, suggesting a need for more robust training approaches for transformers.</li>
            <li>Hybrid ViT showed excellent recall for the normal and adenocarcinoma classes but struggled with squamous cell carcinoma, especially on augmented data.</li>
            <li>Balancing false positives and false negatives remains critical in lung cancer diagnosis to avoid misclassification of healthy patients and ensure accurate detection.</li>
        </ul>
        </section>


        <section id="discussion">
            <h2 className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6">
                Discussion
            </h2>
            <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
                The results demonstrate that pretrained Convolutional Neural Networks (CNNs), particularly the VGG-16 model, significantly outperform Vision Transformer (ViT) models in lung cancer classification on this dataset. CNNs’ ability to efficiently extract spatial features from medical images, especially with limited data, likely contributes to their superior performance. However, the decreased accuracy of ViT and Hybrid ViT models with data augmentation suggests transformers may require larger datasets or specialized training to generalize effectively.
            </p>
            <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
                The Hybrid ViT model showed promising recall for normal and adenocarcinoma classes but struggled with squamous cell carcinoma, highlighting areas for improvement in model robustness. Additionally, the variation in recall across preprocessing techniques emphasizes the importance of data quality and augmentation strategies. Future work should focus on optimizing transformer architectures and leveraging domain-specific augmentations to boost diagnostic accuracy.
            </p>
            <p className="font-akira-expanded text-[18px] leading-[100%] tracking-[0%] mb-5">
                In conclusion, pretrained CNNs remain highly effective for lung cancer classification tasks with current dataset sizes, while Vision Transformers offer potential that requires further exploration. Balancing sensitivity and specificity across tumor types is critical for clinical applications, and transfer learning combined with tailored preprocessing presents a practical pathway for improving AI-based diagnostic tools. Continued research into hybrid models and data strategies will be key to advancing lung cancer detection using deep learning.
            </p>
            <a href="/projects" rel="noopener noreferrer">
                <button className="mt-16 mb-10 bg-white text-black font-[800] text-[25px] leading-[100%] tracking-[0%] font-akira-expanded px-10 py-3 rounded-full w-max block text-left">
                    Back
                </button>
            </a>
        </section>
        </div>
    </div>
  )
}
